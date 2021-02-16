import React, {useState, useEffect } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import MyLibrary from './myLibrary.jsx';
import RecommendedBooks from './recommendedBooks.jsx';
import RecommendedBookClubs from './recommendedBookClubs.jsx';
import FriendRecommendations from './friendRecommendations.jsx';

export default function Profile() {

  let testlength = [
    {
        "kind": "books#volume",
        "id": "xdvEDgAAQBAJ",
        "etag": "xwXzQtwJbUI",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/xdvEDgAAQBAJ",
        "volumeInfo": {
            "title": "Nighthawk",
            "subtitle": "A Novel from the NUMA Files",
            "authors": [
                "Clive Cussler",
                "Graham Brown"
            ],
            "publisher": "Penguin",
            "publishedDate": "2017",
            "description": "When the most advanced aircraft ever designed vanishes over the South Pacific, Kurt Austin and Joe Zavala are drawn into a deadly race to recover the fallen technology, which carries a secret payload of exotic matter capable of triggering an Armageddon-level catastrophe.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780399184017"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "0399184015"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 454,
            "printType": "BOOK",
            "categories": [
                "FICTION"
            ],
            "averageRating": 4.5,
            "ratingsCount": 6,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.0.0.preview.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=xdvEDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=xdvEDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=xdvEDgAAQBAJ&printsec=frontcover&dq=inauthor:cussler&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=xdvEDgAAQBAJ&dq=inauthor:cussler&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Nighthawk.html?hl=&id=xdvEDgAAQBAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=xdvEDgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "When the most advanced aircraft ever designed vanishes over the South Pacific, Kurt Austin and Joe Zavala are drawn into a deadly race to recover the fallen technology, which carries a secret payload of exotic matter capable of triggering ..."
        }
    },
    {
        "kind": "books#volume",
        "id": "WfUThhBfLrgC",
        "etag": "FvrPFlZH9f0",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/WfUThhBfLrgC",
        "volumeInfo": {
            "title": "Treasure",
            "authors": [
                "Clive Cussler"
            ],
            "publisher": "Simon and Schuster",
            "publishedDate": "2011-04-26",
            "description": "Clive Cussler's bestselling Treasure will now be published in our popular premium format with an exciting new cover.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781451621013"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "1451621019"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 678,
            "printType": "BOOK",
            "categories": [
                "Fiction"
            ],
            "averageRating": 3.5,
            "ratingsCount": 10,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.0.0.preview.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=WfUThhBfLrgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=WfUThhBfLrgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=WfUThhBfLrgC&printsec=frontcover&dq=inauthor:cussler&hl=&cd=2&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=WfUThhBfLrgC&dq=inauthor:cussler&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Treasure.html?hl=&id=WfUThhBfLrgC"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=WfUThhBfLrgC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Clive Cussler&#39;s bestselling Treasure will now be published in our popular premium format with an exciting new cover."
        }
    },
    {
        "kind": "books#volume",
        "id": "S6AWSR5dB_4C",
        "etag": "YAUJJQR2d8Q",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/S6AWSR5dB_4C",
        "volumeInfo": {
            "title": "The Race",
            "subtitle": "Isaac Bell #4",
            "authors": [
                "Clive Cussler",
                "Justin Scott"
            ],
            "publisher": "Penguin UK",
            "publishedDate": "2012-07-05",
            "description": "The Race is the fourth turn of the century thriller by Clive Cussler. 1910, and America's first ever cross-country flying race has been sabotaged . . . Newspaper magnate Preston Whiteway is offering a big prize for the first aviator to cross America in under fifty days. He wants Josephine Frost - the country's leading as well as most glamorous pilot - to win. Which is why he's hired Isaac Bell of the Van Dorn Detective Agency. Josephine saw her husband Harry Frost kill a man. Now he wants her dead. And with underworld contacts ready to help in every city en route, he'll do anything, go after anyone who gets in his way - including Whiteway and Bell. Packed with brilliant twists and turns, The Race sees the intrepid Private Investigator locked in a deadly cat-and-mouse game with a killer whose resources are matched only by his willingness to cause mayhem during the race of a lifetime . . . Clive Cussler's The Race is the international bestselling author's follow up to The Spy and The Wrecker, the first two novels in the Isaac Bell series. The Race is a nerve-shredding historical thriller, set at the dawn of flight. Praise for Clive Cussler: 'Frightening and full of suspense . . . unquestionably entertaining' Daily Express 'All-action, narrow escapes and the kind of unrelenting plot tension that has won Cussler hundreds of millions of fans worldwide' Observer",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780141965468"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "0141965460"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 432,
            "printType": "BOOK",
            "categories": [
                "Fiction"
            ],
            "averageRating": 3.5,
            "ratingsCount": 10,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.7.8.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=S6AWSR5dB_4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=S6AWSR5dB_4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=S6AWSR5dB_4C&printsec=frontcover&dq=inauthor:cussler&hl=&cd=3&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=S6AWSR5dB_4C&dq=inauthor:cussler&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/The_Race.html?hl=&id=S6AWSR5dB_4C"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/The_Race-sample-epub.acsm?id=S6AWSR5dB_4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=S6AWSR5dB_4C&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": ". . Clive Cussler&#39;s The Race is the international bestselling author&#39;s follow up to The Spy and The Wrecker, the first two novels in the Isaac Bell series. The Race is a nerve-shredding historical thriller, set at the dawn of flight."
        }
    },
    {
        "kind": "books#volume",
        "id": "ww3gaMzO3NkC",
        "etag": "OFbUncEyFqU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/ww3gaMzO3NkC",
        "volumeInfo": {
            "title": "Medusa",
            "authors": [
                "Clive Cussler",
                "Paul Kemprecos"
            ],
            "publisher": "Penguin",
            "publishedDate": "2009-06-02",
            "description": "Deep-sea explorer and government operative Kurt Austin must save the world from a deliberate viral outbreak in this thriller from the #1 New York Times-bestselling author In the Micronesian islands, a top-secret U.S. government-sponsored undersea lab conducting vital biomedical research on a rare jellyfish known as the Blue Medusa suddenly disappears. At the same time, off Bermuda, a bathysphere is attacked by an underwater vehicle and left helpless a half-mile below the surface, its passengers—including Zavala—left to die. Only Kurt Austin’s heroic measures save them from a watery grave, but suspecting a connection, Austin puts the NUMA team on the case. Austin's team has no way to prepare for what comes next: a hideous series of medical experiments, an extraordinarily ambitious Chinese criminal organization, and a secret new virus that threatens to set off a worldwide pandemic. Austin and Zavala have been in tight spots before, but this time it’s not just their own skins they’re trying to save—it’s the lives of millions. Filled with the high-stakes suspense and boundless invention that are unique to Cussler, Medusa is the most thrilling novel yet from the grand master of adventure.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781101057315"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "1101057319"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 528,
            "printType": "BOOK",
            "categories": [
                "Fiction"
            ],
            "averageRating": 4.5,
            "ratingsCount": 3,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.8.8.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=ww3gaMzO3NkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=ww3gaMzO3NkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=ww3gaMzO3NkC&printsec=frontcover&dq=inauthor:cussler&hl=&cd=4&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=ww3gaMzO3NkC&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ww3gaMzO3NkC"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
                "amount": 9.99,
                "currencyCode": "USD"
            },
            "retailPrice": {
                "amount": 9.99,
                "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=ww3gaMzO3NkC&rdid=book-ww3gaMzO3NkC&rdot=1&source=gbs_api",
            "offers": [
                {
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 9990000,
                        "currencyCode": "USD"
                    },
                    "retailPrice": {
                        "amountInMicros": 9990000,
                        "currencyCode": "USD"
                    },
                    "giftable": true
                }
            ]
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Medusa-sample-epub.acsm?id=ww3gaMzO3NkC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=ww3gaMzO3NkC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Deep-sea explorer and government operative Kurt Austin must save the world from a deliberate viral outbreak in this thriller from the #1 New York Times-bestselling author In the Micronesian islands, a top-secret U.S. government-sponsored ..."
        }
    },
    {
        "kind": "books#volume",
        "id": "xT2Um8qAJGAC",
        "etag": "vRA+bSQ93CM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/xT2Um8qAJGAC",
        "volumeInfo": {
            "title": "Dragon",
            "authors": [
                "Clive Cussler"
            ],
            "publisher": "Simon and Schuster",
            "publishedDate": "2006-10-31",
            "description": "Adventurer Dirk Pitt matches wits with a group of Japanese nationalist extremists out to establish a new empire as he races against time to recover an atomic bomb lost in the Pacific aboard a B-29 during World War II.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781416537809"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "1416537805"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 608,
            "printType": "BOOK",
            "categories": [
                "Fiction"
            ],
            "averageRating": 3.5,
            "ratingsCount": 19,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=xT2Um8qAJGAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=xT2Um8qAJGAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=xT2Um8qAJGAC&printsec=frontcover&dq=inauthor:cussler&hl=&cd=5&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=xT2Um8qAJGAC&dq=inauthor:cussler&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Dragon.html?hl=&id=xT2Um8qAJGAC"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=xT2Um8qAJGAC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Adventurer Dirk Pitt matches wits with a group of Japanese nationalist extremists out to establish a new empire as he races against time to recover an atomic bomb lost in the Pacific aboard a B-29 during World War II."
        }
    },
    {
        "kind": "books#volume",
        "id": "HEfCDwAAQBAJ",
        "etag": "pyv8dIcCZLg",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/HEfCDwAAQBAJ",
        "volumeInfo": {
            "title": "Marauder",
            "authors": [
                "Clive Cussler",
                "Boyd Morrison"
            ],
            "publisher": "Penguin",
            "publishedDate": "2020-11-10",
            "description": "It is up to Juan Cabrillo and the crew of his ship, the Oregon, to stop a terrorist plot to release a deadly chemical weapon across the globe in the explosive new novel in Clive Cussler's #1 New York Times bestselling series. While interrupting an attack on a Kuwaiti oil tanker, Juan Cabrillo and his team discover something even more dangerous: a ruthless billionaire's dying wish has allowed a paralyzing chemical to end up in the hands of a terrorist group. When an Oregon crew member falls victim to the poison, Juan Cabrillo will stop at nothing to find an antidote before it is too late. He and his team must connect an ancient mystery with a cunning modern enemy in order to save millions of innocent lives, including their own.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780593087923"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "0593087925"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 384,
            "printType": "BOOK",
            "categories": [
                "Fiction"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.3.2.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=HEfCDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=HEfCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=HEfCDwAAQBAJ&printsec=frontcover&dq=inauthor:cussler&hl=&cd=6&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=HEfCDwAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=HEfCDwAAQBAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
                "amount": 14.99,
                "currencyCode": "USD"
            },
            "retailPrice": {
                "amount": 14.99,
                "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=HEfCDwAAQBAJ&rdid=book-HEfCDwAAQBAJ&rdot=1&source=gbs_api",
            "offers": [
                {
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 14990000,
                        "currencyCode": "USD"
                    },
                    "retailPrice": {
                        "amountInMicros": 14990000,
                        "currencyCode": "USD"
                    },
                    "giftable": true
                }
            ]
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Marauder-sample-epub.acsm?id=HEfCDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=HEfCDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "It is up to Juan Cabrillo and the crew of his ship, the Oregon, to stop a terrorist plot to release a deadly chemical weapon across the globe in the explosive new novel in Clive Cussler&#39;s #1 New York Times bestselling series."
        }
    },
    {
        "kind": "books#volume",
        "id": "jJw7AgAAQBAJ",
        "etag": "yvWofFgUc38",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/jJw7AgAAQBAJ",
        "volumeInfo": {
            "title": "Ghost Ship",
            "authors": [
                "Clive Cussler",
                "Graham Brown"
            ],
            "publisher": "Penguin",
            "publishedDate": "2014-05-27",
            "description": "When NUMA team leader Kurt Austin finds his own memories of a dangerous mission aren't to be trusted, he must follow a trail of mysterious disppearances to the truth in this novel in the #1 New York Times-bestselling series. After a narrow escape during a perilous rescue operation to save the passengers and crew from a sinking yacht, Marine adventurer Kurt Austin awakens with fragmented and conflicting memories. Did he see an old friend and her children drown, or was the yacht abandoned when he came aboard? For reasons he cannot explain, Kurt doesn’t trust either version of his recollection. Determined to know the fate of his friend, he begins to search for answers, and soon finds himself descending into a shadowy world of state-sponsored cybercrime, and uncovering a pattern of vanishing scientists, suspicious accidents, and a web of human trafficking. With the help of fellow NUMA operative Joe Zavala, he takes on the sinister organization at the heart of this web, facing off with them in locations ranging from Monaco to North Korea to the rugged coasts of Madagascar. But where he will ultimately end up even he could not begin to guess.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780698140752"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "0698140753"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 448,
            "printType": "BOOK",
            "categories": [
                "Fiction"
            ],
            "averageRating": 3.5,
            "ratingsCount": 5,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.7.6.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=jJw7AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=jJw7AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=jJw7AgAAQBAJ&printsec=frontcover&dq=inauthor:cussler&hl=&cd=7&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=jJw7AgAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=jJw7AgAAQBAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
                "amount": 9.99,
                "currencyCode": "USD"
            },
            "retailPrice": {
                "amount": 9.99,
                "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=jJw7AgAAQBAJ&rdid=book-jJw7AgAAQBAJ&rdot=1&source=gbs_api",
            "offers": [
                {
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 9990000,
                        "currencyCode": "USD"
                    },
                    "retailPrice": {
                        "amountInMicros": 9990000,
                        "currencyCode": "USD"
                    },
                    "giftable": true
                }
            ]
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Ghost_Ship-sample-epub.acsm?id=jJw7AgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=jJw7AgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "When NUMA team leader Kurt Austin finds his own memories of a dangerous mission aren&#39;t to be trusted, he must follow a trail of mysterious disppearances to the truth in this novel in the #1 New York Times-bestselling series."
        }
    },
    {
        "kind": "books#volume",
        "id": "AkraCwAAQBAJ",
        "etag": "3HN9Q2gFD4U",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/AkraCwAAQBAJ",
        "volumeInfo": {
            "title": "The Striker",
            "authors": [
                "Clive Cussler",
                "Justin Scott"
            ],
            "publisher": "G.P. Putnam's Sons",
            "publishedDate": "2014-03-04",
            "description": "After witnessing a terrible coal mining accident, Detective Isaac Bell hunts for the high-level saboteurs he believes are responsible in this new novel from the best-selling co-authors of The Thief and The Spy. Reprint. 750,000 first printing.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780425264683"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "0425264688"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 402,
            "printType": "BOOK",
            "categories": [
                "Fiction"
            ],
            "averageRating": 3.5,
            "ratingsCount": 10,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=AkraCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=AkraCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=AkraCwAAQBAJ&printsec=frontcover&dq=inauthor:cussler&hl=&cd=8&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=AkraCwAAQBAJ&dq=inauthor:cussler&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/The_Striker.html?hl=&id=AkraCwAAQBAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=AkraCwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "After witnessing a terrible coal mining accident, Detective Isaac Bell hunts for the high-level saboteurs he believes are responsible in this new novel from the best-selling co-authors of The Thief and The Spy."
        }
    },
    {
        "kind": "books#volume",
        "id": "mejrxNAbNCsC",
        "etag": "AR9cWWImAN0",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/mejrxNAbNCsC",
        "volumeInfo": {
            "title": "The Thief",
            "authors": [
                "Clive Cussler",
                "Justin Scott"
            ],
            "publisher": "Penguin",
            "publishedDate": "2012-03-06",
            "description": "Turn-of-the-century detective Isaac Bell matches wits with a German spy just as the world inches closer to global warfare in this novel in the #1 New York Times-bestselling series. It's 1910 and Chief Investigator Isaac Bell, along with fellow Van Dorn detective, Archie Abbott, is escorting a Wall Street stock swindler to his trial in New York aboard the ocean liner Mauretania. Pair intend to enjoy the open sea and make use of the leisure time to plan Bell’s wedding to Miss Marion Morgan, but are forced to change plans when two European scientists are nearly abducted and forced overboard. Bell springs into action just in time to stop the kidnapping, but his new charges are convinced they are still at risk. There’s something in their possession, an historic invention, and there’s a German munitions trust that will stop at nothing to steal it. For war clouds are looming, and a ruthless espionage agent has spotted an opportunity to give the German Empire an edge in the coming conflict. What’s worse, Bell’s already a step behind. He’s made the mistake of assuming it’s some sort of war machine. But not all weapons are meant for the battlefield…",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781101577295"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "1101577290"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 432,
            "printType": "BOOK",
            "categories": [
                "Fiction"
            ],
            "averageRating": 3,
            "ratingsCount": 15,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.8.7.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=mejrxNAbNCsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=mejrxNAbNCsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=mejrxNAbNCsC&printsec=frontcover&dq=inauthor:cussler&hl=&cd=9&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=mejrxNAbNCsC&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=mejrxNAbNCsC"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
                "amount": 9.99,
                "currencyCode": "USD"
            },
            "retailPrice": {
                "amount": 9.99,
                "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=mejrxNAbNCsC&rdid=book-mejrxNAbNCsC&rdot=1&source=gbs_api",
            "offers": [
                {
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 9990000,
                        "currencyCode": "USD"
                    },
                    "retailPrice": {
                        "amountInMicros": 9990000,
                        "currencyCode": "USD"
                    },
                    "giftable": true
                }
            ]
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/The_Thief-sample-epub.acsm?id=mejrxNAbNCsC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=mejrxNAbNCsC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Turn-of-the-century detective Isaac Bell matches wits with a German spy just as the world inches closer to global warfare in this novel in the #1 New York Times-bestselling series."
        }
    },
    {
        "kind": "books#volume",
        "id": "xEtl1JPSNlwC",
        "etag": "FYyRvhTbK/Q",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/xEtl1JPSNlwC",
        "volumeInfo": {
            "title": "Arctic Drift",
            "authors": [
                "Clive Cussler",
                "Dirk Cussler"
            ],
            "publisher": "Penguin",
            "publishedDate": "2009-11-24",
            "description": "Oceanographer Dirk Pitt traces a lost ship's mysterious cargo to a scientific discovery that could reverse the dangers of climate change in this novel in the #1 New York Times-bestselling action adventure series. When an act of sabotage aims to slow down a technological breakthrough in American clean energy, it puts the United States on the brink of war with one of its closest allies. Tension boils on the homefront, too, as gas prices surge to an all-time high. To prevent global catastrophe, Dirk Pitt and his children, Dirk Jr. and Summer, must piece together what little records remain of the initial experiment. They may not know how it was done, but they know what their scientists were trying to accomplish: a solution for global warming. Their only real clue might just be a mysterious silvery mineral traced to a long-ago expedition in search of the fabled Northwest Passage. But no one survived from that doomed mission. And if Pitt, his family, and his buddy Al Giordino aren't careful, the very same fate may await them…and the world.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "1101151501"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9781101151501"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 608,
            "printType": "BOOK",
            "categories": [
                "Fiction"
            ],
            "averageRating": 3.5,
            "ratingsCount": 274,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "2.10.6.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=xEtl1JPSNlwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=xEtl1JPSNlwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=xEtl1JPSNlwC&printsec=frontcover&dq=inauthor:cussler&hl=&cd=10&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=xEtl1JPSNlwC&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=xEtl1JPSNlwC"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
                "amount": 9.99,
                "currencyCode": "USD"
            },
            "retailPrice": {
                "amount": 9.99,
                "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=xEtl1JPSNlwC&rdid=book-xEtl1JPSNlwC&rdot=1&source=gbs_api",
            "offers": [
                {
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 9990000,
                        "currencyCode": "USD"
                    },
                    "retailPrice": {
                        "amountInMicros": 9990000,
                        "currencyCode": "USD"
                    },
                    "giftable": true
                }
            ]
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Arctic_Drift-sample-epub.acsm?id=xEtl1JPSNlwC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=xEtl1JPSNlwC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Oceanographer Dirk Pitt traces a lost ship&#39;s mysterious cargo to a scientific discovery that could reverse the dangers of climate change in this novel in the #1 New York Times-bestselling action adventure series."
        }
    }
]
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <MyLibrary />
          </Col>
          <Col>
            <Row>
              <div>{testlength.length}</div>
            </Row>
            <Row className="friend-recommendations">
              <FriendRecommendations />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <RecommendedBooks />
          </Col>
          <Col>
            <RecommendedBookClubs />
          </Col>
        </Row>
      </Container>
    </div>
  )
}