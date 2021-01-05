import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	public objectKeys = Object.keys;

	public columnsArray;

	public columns;

	public rows;

	private getDataSearchResults() {

		let datasearchresults: [any] = [{
			columns: [
				"fileName",
				"testName",
				"channelName",
				"testCategory",
				"folderName",
				"fileSize",
				"indexDate",
				"lastModifiedDate",
				"relativePathName",
				"directory",
				"size",
				"fileStoreId",
				"fileStoreUri",
				"filePathCallbackURL",
				"filePathId",
				"tests"
			],
			results: 10,
			totalResults: 100,
			data: [
				{
					"fileName": "file name0",
					"testName": "test name0",
					"channelName": "channel name0",
					"testCategory": "test cat0",
					"folderName": "folder name0",
					"fileSize": "439104",
					"indexDate": "yesterday + 0",
					"lastModifiedDate": "today + 0",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name1",
					"testName": "test name1",
					"channelName": "channel name1",
					"testCategory": "test cat1",
					"folderName": "folder name1",
					"fileSize": "209113",
					"indexDate": "yesterday + 1",
					"lastModifiedDate": "today + 1",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name2",
					"testName": "test name2",
					"channelName": "channel name2",
					"testCategory": "test cat2",
					"folderName": "folder name2",
					"fileSize": "285273",
					"indexDate": "yesterday + 2",
					"lastModifiedDate": "today + 2",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name3",
					"testName": "test name3",
					"channelName": "channel name3",
					"testCategory": "test cat3",
					"folderName": "folder name3",
					"fileSize": "181804",
					"indexDate": "yesterday + 3",
					"lastModifiedDate": "today + 3",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name4",
					"testName": "test name4",
					"channelName": "channel name4",
					"testCategory": "test cat4",
					"folderName": "folder name4",
					"fileSize": "140420",
					"indexDate": "yesterday + 4",
					"lastModifiedDate": "today + 4",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name5",
					"testName": "test name5",
					"channelName": "channel name5",
					"testCategory": "test cat5",
					"folderName": "folder name5",
					"fileSize": "407102",
					"indexDate": "yesterday + 5",
					"lastModifiedDate": "today + 5",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name6",
					"testName": "test name6",
					"channelName": "channel name6",
					"testCategory": "test cat6",
					"folderName": "folder name6",
					"fileSize": "416515",
					"indexDate": "yesterday + 6",
					"lastModifiedDate": "today + 6",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name7",
					"testName": "test name7",
					"channelName": "channel name7",
					"testCategory": "test cat7",
					"folderName": "folder name7",
					"fileSize": "771231",
					"indexDate": "yesterday + 7",
					"lastModifiedDate": "today + 7",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name8",
					"testName": "test name8",
					"channelName": "channel name8",
					"testCategory": "test cat8",
					"folderName": "folder name8",
					"fileSize": "196316",
					"indexDate": "yesterday + 8",
					"lastModifiedDate": "today + 8",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name9",
					"testName": "test name9",
					"channelName": "channel name9",
					"testCategory": "test cat9",
					"folderName": "folder name9",
					"fileSize": "682065",
					"indexDate": "yesterday + 9",
					"lastModifiedDate": "today + 9",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name10",
					"testName": "test name10",
					"channelName": "channe1 name10",
					"testCategory": "test cat10",
					"folderName": "folder name10",
					"fileSize": "439104",
					"indexDate": "yesterday + 10",
					"lastModifiedDate": "today + 10",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name11",
					"testName": "test name11",
					"channelName": "channel name11",
					"testCategory": "test cat11",
					"folderName": "folder name11",
					"fileSize": "209113",
					"indexDate": "yesterday + 11",
					"lastModifiedDate": "today + 11",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name12",
					"testName": "test name12",
					"channelName": "channel name12",
					"testCategory": "test cat12",
					"folderName": "folder name12",
					"fileSize": "285273",
					"indexDate": "yesterday + 12",
					"lastModifiedDate": "today + 12",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name13",
					"testName": "test name13",
					"channelName": "channel name13",
					"testCategory": "test cat13",
					"folderName": "folder name13",
					"fileSize": "181804",
					"indexDate": "yesterday + 13",
					"lastModifiedDate": "today + 13",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name14",
					"testName": "test name14",
					"channelName": "channel name14",
					"testCategory": "test cat14",
					"folderName": "folder name14",
					"fileSize": "140420",
					"indexDate": "yesterday + 14",
					"lastModifiedDate": "today + 14",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				},
				{
					"fileName": "file name15",
					"testName": "test name15",
					"channelName": "channel name15",
					"testCategory": "test cat15",
					"folderName": "folder name15",
					"fileSize": "407102",
					"indexDate": "yesterday + 15",
					"lastModifiedDate": "today + 15",
					"relativePathName": "file name0",
					"directory": "test name0",
					"size": "channel name0",
					"fileStoreId": "test cat0",
					"fileStoreUri": "folder name0",
					"filePathCallbackURL": "439104",
					"filePathId": "yesterday + 0",
					"tests": "today + 0"
				}
			]
		}];

		for (let result of datasearchresults) {
			if (result.columns) {
				this.columnsArray = result.columns;
			}
			if (result.data) {
				this.rows = result.data;
			}
		}
		this.columns = this.columnsArray.map((e) => {
			return {Name: e, Visible: true};
		});

		console.log('columnsArray: ' + JSON.stringify(this.columns));
		console.log('rows: ' + JSON.stringify(this.rows));
	}


	// Convert array to object

	/* public columnsArray = [
		"fileName",
		"testName",
		"channelName",
		"testCategory",
		"folderName",
		"fileSize",
		"indexDate",
		"lastModifiedDate",
		"relativePathName",
		"directory",
		"size",
		"fileStoreId",
		"fileStoreUri",
		"filePathCallbackURL",
		"filePathId",
		"tests"
	]; */

	/* public columns = this.columnsArray.map((e) => {
		return { Name: e, Visible: true };
	}); */


	/* public columns = [{
		'Name': 'fileName',
		Visible: true,
	}, {
		'Name': 'testName',
		Visible: true,
	}, {
		'Name': 'channelName',
		Visible: true,
	}, {
		'Name': 'testCategory',
		Visible: true,
	}, {
		'Name': 'folderName',
		Visible: true,
	}, {
		'Name': 'fileSize',
		Visible: true,
	}, {
		'Name': 'indexDate',
		Visible: true,
	}, {
		'Name': 'lastModifiedDate',
		Visible: true,
	}, {
		'Name': 'relativePathName',
		Visible: true,
	}, {
		'Name': 'directory',
		Visible: true,
	}, {
		'Name': 'size',
		Visible: true,
	}, {
		'Name': 'fileStoreId',
		Visible: true,
	}, {
		'Name': 'fileStoreUri',
		Visible: true,
	}, {
		'Name': 'filePathCallbackURL',
		Visible: true,
	}, {
		'Name': 'filePathId',
		Visible: true,
	}, {
		'Name': 'tests',
		Visible: true,
	},
	]; */

	/* public rows = [
		{
			"fileName":"file name0",
			"testName":"test name0",
			"channelName":"channel name0",
			"testCategory":"test cat0",
			"folderName":"folder name0",
			"fileSize":"439104",
			"indexDate":"yesterday + 0",
			"lastModifiedDate":"today + 0",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name1",
			"testName":"test name1",
			"channelName":"channel name1",
			"testCategory":"test cat1",
			"folderName":"folder name1",
			"fileSize":"209113",
			"indexDate":"yesterday + 1",
			"lastModifiedDate":"today + 1",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name2",
			"testName":"test name2",
			"channelName":"channel name2",
			"testCategory":"test cat2",
			"folderName":"folder name2",
			"fileSize":"285273",
			"indexDate":"yesterday + 2",
			"lastModifiedDate":"today + 2",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name3",
			"testName":"test name3",
			"channelName":"channel name3",
			"testCategory":"test cat3",
			"folderName":"folder name3",
			"fileSize":"181804",
			"indexDate":"yesterday + 3",
			"lastModifiedDate":"today + 3",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name4",
			"testName":"test name4",
			"channelName":"channel name4",
			"testCategory":"test cat4",
			"folderName":"folder name4",
			"fileSize":"140420",
			"indexDate":"yesterday + 4",
			"lastModifiedDate":"today + 4",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name5",
			"testName":"test name5",
			"channelName":"channel name5",
			"testCategory":"test cat5",
			"folderName":"folder name5",
			"fileSize":"407102",
			"indexDate":"yesterday + 5",
			"lastModifiedDate":"today + 5",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name6",
			"testName":"test name6",
			"channelName":"channel name6",
			"testCategory":"test cat6",
			"folderName":"folder name6",
			"fileSize":"416515",
			"indexDate":"yesterday + 6",
			"lastModifiedDate":"today + 6",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name7",
			"testName":"test name7",
			"channelName":"channel name7",
			"testCategory":"test cat7",
			"folderName":"folder name7",
			"fileSize":"771231",
			"indexDate":"yesterday + 7",
			"lastModifiedDate":"today + 7",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name8",
			"testName":"test name8",
			"channelName":"channel name8",
			"testCategory":"test cat8",
			"folderName":"folder name8",
			"fileSize":"196316",
			"indexDate":"yesterday + 8",
			"lastModifiedDate":"today + 8",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name9",
			"testName":"test name9",
			"channelName":"channel name9",
			"testCategory":"test cat9",
			"folderName":"folder name9",
			"fileSize":"682065",
			"indexDate":"yesterday + 9",
			"lastModifiedDate":"today + 9",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name10",
			"testName":"test name10",
			"channelName":"channe1 name10",
			"testCategory":"test cat10",
			"folderName":"folder name10",
			"fileSize":"439104",
			"indexDate":"yesterday + 10",
			"lastModifiedDate":"today + 10",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name11",
			"testName":"test name11",
			"channelName":"channel name11",
			"testCategory":"test cat11",
			"folderName":"folder name11",
			"fileSize":"209113",
			"indexDate":"yesterday + 11",
			"lastModifiedDate":"today + 11",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name12",
			"testName":"test name12",
			"channelName":"channel name12",
			"testCategory":"test cat12",
			"folderName":"folder name12",
			"fileSize":"285273",
			"indexDate":"yesterday + 12",
			"lastModifiedDate":"today + 12",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name13",
			"testName":"test name13",
			"channelName":"channel name13",
			"testCategory":"test cat13",
			"folderName":"folder name13",
			"fileSize":"181804",
			"indexDate":"yesterday + 13",
			"lastModifiedDate":"today + 13",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name14",
			"testName":"test name14",
			"channelName":"channel name14",
			"testCategory":"test cat14",
			"folderName":"folder name14",
			"fileSize":"140420",
			"indexDate":"yesterday + 14",
			"lastModifiedDate":"today + 14",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		},
		{
			"fileName":"file name15",
			"testName":"test name15",
			"channelName":"channel name15",
			"testCategory":"test cat15",
			"folderName":"folder name15",
			"fileSize":"407102",
			"indexDate":"yesterday + 15",
			"lastModifiedDate":"today + 15",
			"relativePathName":"file name0",
			"directory":"test name0",
			"size":"channel name0",
			"fileStoreId":"test cat0",
			"fileStoreUri":"folder name0",
			"filePathCallbackURL":"439104",
			"filePathId":"yesterday + 0",
			"tests":"today + 0"
		}
	]; */


	constructor() {
		// console.log('columnsArray: ' + JSON.stringify(this.columns));
		this.getDataSearchResults();
	}

	public ngOnInit() {
		/// get all datasearchresults
		// this.getDataSearchResults();
	}


	public toggle(val) {
		// this.columns.forEach(function () {
		// console.log ('val: ' + JSON.stringify(val.Visible));
		val.Visible = !val.Visible;
		/* if (val === false) {
			element.Visible = false;
		} else {
			element.Visible = true;
		} */
		// });
	}

}

