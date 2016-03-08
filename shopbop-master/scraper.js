'use strict';

const async = require('async');
const request = require('request');
const cheerio = require('cheerio');

const search = (query, callback) => {
	async.waterfall([
		function (next) {
			request({
				url: 'https://www.shopbop.com/actions/viewSearchResultsAction.action',
				qs: {
					searchButton: 'Submit',
					query: query,
					searchSuggestion: false
				}
			}, (error, response, body) => {
				next(error, body);
			});
		},
		function (body, next) {
			try {
				let $ = cheerio.load(body);

				let links = [];

				// async.each($('.product a.photo'), (ele, next_element) => {
					async.each($('.product'), (ele, next_element) => {
					let prodInfo = {};

					// let link = $(ele).attr('href');
					 let imgSrc = $(ele).find('a.photo img').attr("src");
					 prodInfo.imgSrc = imgSrc;

					 let brand = $(ele).find('div.brand').text();
					 prodInfo.brand = brand;
					 let title = $(ele).find('div.title').text();
					 prodInfo.title = title;

					 let price = $(ele).find('div.price');
					 let retail = price.find('span.retail-price').text();
					 prodInfo.retail = retail;

					 let currentPrice = price.find('span.sale-price-low').text();
					 prodInfo.price = currentPrice;

					 let discount = false;

					 if (currentPrice !== retail){
					 	discount = true;
					 };
					 prodInfo.onSale = discount;

					 links.push(prodInfo);
					// links.push(`https://www.shopbop.com${link}`);
					next_element();
				}, (error) => {
					next(error, links)
				});
			} catch (error) {
				next(error);
			}
		}
	], function (error, links) {
		callback(error, links);
	})
};

const Scraper = {
	search: search
};

module.exports = Scraper;