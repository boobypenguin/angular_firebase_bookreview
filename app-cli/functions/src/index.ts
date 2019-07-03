import * as request from "request";
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();
const db = admin.firestore();

exports.isbn = functions.https.onCall(
    (data, context) => {
        const opt = {
            url: 'https://www.googleapis.com/books/v1/volumes?country=JP&q=' + data.isbn,
            method: 'GET',
            json: true
        }
        request(opt, async (error, response, body) => {
            if (body.items.length == 0) {
                return 'ERR';
            }
            let gid = body.items[0]['id'];
            let item = body.items[0].volumeInfo;
            let isbn10 = 'undefined';
            if (item.industryIdentifiers[0]['type'] == 'ISBN_10') {
                isbn10 = item.industryIdentifiers[0]['identifier']
            }
            if (item.industryIdentifiers[1]['type'] == 'ISBN_10') {
                isbn10 = item.industryIdentifiers[1]['identifier']
            }
            let obj = {
                isbn: data.isbn,
                gid: gid,
                isbn10: isbn10,
                author: item.authors == undefined ? 'undefined' : item.authors[0],
                publisher: item.publisher == undefined ? 'undefined' : item.publisher,
                title: item.title == undefined ? 'undefined' : item.title,
                subtitle: item.subtitle == undefined ? 'undefined' : item.subtitle,
                published: item.publishedDate == undefined ? 'undefined' : item.publishedDate,
                desc: item.description == undefined ? 'undefined' : item.description,
                created: new Date().getTime()
            };
            await db.collection('books').add(obj);
            return 'OK';
        });
    }
);
