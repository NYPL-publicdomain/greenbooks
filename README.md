<img src="http://images.nypl.org/index.php?id=5206347&t=r" alt="Green Book cover, 1940" />
<img src="http://images.nypl.org/index.php?id=5207997&t=r" alt="Green Book cover, 1948" />
<img src="http://images.nypl.org/index.php?id=5207618&t=r" alt="Green Book cover, 1947" />


## Green Books project
The Green Book was a travel guide published between 1936 and 1966 that listed hotels, restaurants, bars, gas stations, etc. where Black travelers would be welcome.

This repository hosts data extracted from the [original Green Book collection](http://digitalcollections.nypl.org/collections/the-green-book#/?tab=about&amp;scroll=0) held by NYPL's Schomburg Center for Research in Black Culture in order to create searchable PDFs of the 21 volumes, as well as to power a set of experimental interfaces by the Brian Foo of NYPL Labs. The interface is designed to encourage you to explore these books and map them in your mind -- to think about the trips you could take, can take, will take. See how the size of the world can change depending on the color of your skin. 

View the website here: <http://publicdomain.nypl.org/greenbook-map/>

## Data extracted from the Green Books

21 volumes, 1937 - 1964. According to legal research done by NYPL staff, those 21 volumes have no known US copyright restrictions, and can be used and reused freely.

There are two derivatives for each page -- a .txt file with the raw OCR data, and an .hocr file with coordinate box data for the OCR data. 

All file names correspond to the imageID of the original captures -- i.e.:

`{$captureID}g.txt` is the OCRed output of `{$captureID}g.jpg`

`{$captureID}g.hocr` is the coordinate OCR output of `{$captureID}g.jpg`

e.g.:
`5207705g.txt` is the OCRed output of `5207705g.jpg`

`5207705g.hocr` is the coordinate OCR output of `5207705g.jpg`

## Images
Primary source images can be sourced this way:

- http://images.nypl.org/index.php?id={$imageID}&t=w (760px)
- http://images.nypl.org/index.php?id={$imageID}&t=q (1600px)
- http://images.nypl.org/index.php?id={$imageID}&t=v (2560px)
- http://images.nypl.org/index.php?id={$imageID}&t=g (original dimensions)

Meanwhile, to view each capture on our Digital Collections platform, you can do: 
`digitalcollections.nypl.org/items/image_id/{$captureID}`

## Context

For a nice writeup, see this [great blog post by K Menick of NYPL's Schomburg Center for Research in Black Culture](http://www.nypl.org/blog/2015/03/24/schomburg-treasures-green-book):

From the Introduction to the 1949 edition: 

> With the introduction of this travel guide in 1936, it has been our idea to give the Negro traveler information that will keep him from running into difficulties, embarrassments and to make his trips more enjoyable. 

> The Jewish press has long published information about places that are restricted and there are numerous publications that give the gentile whites all kinds of information. But during these long years of discrimination, before 1936 other guides have been published for the Negro, some are still published, but the majority have gone out of business for various reasons. 

> In 1936 the Green Book was only a local publication for Metropolitan New York, the response for copies was so great it was turned into a national issue in 1937 to cover the United States. This guide while lacking in many respects was accepted by thousands of travelers. Through the courtesy of the United States Travel Bureau of which Mr. Chas. A. R. McDowell was the collaborator on Negro Affairs, more valuable information was secured. With the two working together, this guide contained the best ideas for the Negro traveler. Year after year it grew until 1941. "PM" one of New York's great white newspapers found out about it. Wrote an article about the guide and praised it highly. At the present time the guide contains 80 pages and lists numerous business places, including whites which cater to the Negro trade. 

> There are thousands of first class business places that we don't know about and can't list, which would be glad to serve the traveler, but it is hard to secure listings of these places since we can't secure enough agents to send us the information. Each year before we go to press the new information is included in the new edition. When you are traveling please mention the Green Book, in order that they might know how you found their place of business, as they can see that you are strangers. If they haven't heard about this guide, ask them to get in touch with us so that we might list their place. 

> If this guide has proved useful to you on your trips, let us know. If not, tell us also as we appreciate your criticisms and ideas in the improvement of this guide from which you benefit. 

> **There will be a day sometime in the near future when this guide will not have to be published. That is when we as a race will have equal opportunities and privileges in the United States. It will be a great day for us to suspend this publication for then we can go wherever we please, and without embarrassment. But until that time comes we shall continue to publish this information for your convenience each year.**

---

### About the NYPL Public Domain Release

On January 6, 2016, The New York Public Library enhanced access to public domain items in Digital Collections so that everyone has the freedom to enjoy and reuse these materials in almost limitless ways. For all such items the Library now makes it possible to download the highest resolution images available directly from the [Digital Collections](http://digitalcollections.nypl.org) website. 

That means more than 187,000 items free to use without restriction! But we know that 180K of anything is a lot to get your head around — so as a way to introduce you to these collections and inspire new works, NYPL Labs developed a suite of [projects and tools](http://nypl.org/publicdomain) to help you explore the vast collections and dive deep into specific ones. 

Go forth, reuse, and let us know what you made with the #nyplremix hashtag! For more information:

- [NYPL Labs Remix Residency](http://www.nypl.org/help/about-nypl/fellowships-institutes/remix)
- [Data & Tools](https://github.com/NYPL-publicdomain/data-and-utilities)
- [Public Domain Collections](http://publicdomain.nypl.org)
- [Project Credits](https://github.com/NYPL-publicdomain/nypl-publicdomain.github.io#credits-for-the-january-2016-nypl-public-domain-release)
