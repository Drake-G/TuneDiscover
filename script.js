//recommendation = albums[Math.floor(Math.random() * albums.length)];
var vinylLink = document.getElementById("vinylLink");
var link = document.getElementById("link");
var spotify = document.getElementById("spotify");
var cover = document.getElementById("cover");
var year = document.getElementById("year");
//document.getElementById("count").innerHTML = "Number of albums in circulation: " + albums.length;
document.getElementById("newTunes").addEventListener("click", function() {
    recommendation = albums[Math.floor(Math.random() * albums.length)];
    document.getElementById("recommendation").innerHTML = "Your new album - " + recommendation;
    if (recommendation === "Pink Floyd: Dark Side of the Moon") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01LTHN0DG&asins=B01LTHN0DG&linkId=9e8ddce52707ca4e5173b77e138e31e1&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>';
     
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4LH4d3cOWNNsVw41Gqt2kv?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1973 and has a runtime of 42 minutes and 53 seconds.";
    }
    if (recommendation === "Led Zeppelin: Houses of the Holy") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00M30VKWM&asins=B00M30VKWM&linkId=3febeb4e63df7a818ca96be1891deafe&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>';
     
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0GqpoHJREPp0iuXK3HzrHk?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1973 and has a runtime of 40 minutes and 56 seconds.";
    }
    if (recommendation === "Greta Van Fleet: The Battle at Gardens Gate") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08PJNXYWB&asins=B08PJNXYWB&linkId=d0d76fc129d9fcb0c90ca6294f300a1c&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7kjLKy9JLbwM9F7eDQEnd2?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    
      year.innerHTML = "This album was released in 2021 and has a runtime of 1 hour and 3 minutes."    
    }
    if (recommendation === "Dua Lipa: Future Nostalgia (Moonlight Edition)") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08WJP5FCB&asins=B08WJP5FCB&linkId=e3d5f33ae4ecde2ff25d6a864402a5cd&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
    
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0JeyP8r2hBxYIoxXv11XiX?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    
      year.innerHTML = "This album was released in 2021 and has a runtime of 1 hour and 1 minute."
    }
    if (recommendation === "Miley Cyrus: Plastic Hearts") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B091F5RYM8&asins=B091F5RYM8&linkId=7990a5bac47cbd6ba89f7473550fe00a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5BRhg6NSEZOj0BR6Iz56fR" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2020 and has a runtime of 50 minutes and 26 seconds."
    }
    if (recommendation === "Polyphia: New Levels New Devils") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07G2WPF42&asins=B07G2WPF42&linkId=540bd995c27587f53af065391b875a48&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7GhytR6ZMWetf1jxAzITtG?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2018 and has a runtime of 36 minutes and 57 seconds."
    }
    if (recommendation === "AC/DC: High Voltage") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0000CF34J&asins=B0000CF34J&linkId=6b94424e418a6b23ba6d09381b51b70a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/19AUoKWRAaQYrggVvdQnqq?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1976 and has a runtime of 44 minutes and 15 seconds."
    }
    if (recommendation === "AMFM: Andy Mowatt's Frequency Movement") {
      vinylLink.innerHTML = '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3555721076/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://andymowatt.bandcamp.com/album/amfm-andy-mowatts-frequency-movement">AMFM: Andy Mowatt&#39;s Frequency Movement by AMFM: Andy Mowatt&#39;s Frequency Movement</a></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4F3ESG7s0Z3MRsAj1m9ToQ?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2018 and has a runtime of 1 hour and 4 minutes."
    }
    if (recommendation === "Adele: 21") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08P85K82V&asins=B08P85K82V&linkId=97fbc73b033dddbb8a6ca12ebac9ab39&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0Lg1uZvI312TPqxNWShFXL?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released 2011 and has a runtime of 48 minutes and 4 seconds."
    }
    if (recommendation === "Guns N Roses: Appetite for Destruction") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07CPK4SLD&asins=B07CPK4SLD&linkId=3cad7710bd34808ac2a914bf87938a5f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/28yHV3Gdg30AiB8h8em1eW?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1987 and has a runtime of 53 minutes and 46 seconds."
    }
    if (recommendation === "Medusa's Disco: Orphic Grimoire") {
      vinylLink.innerHTML = '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3058852541/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://medusasdisco.bandcamp.com/album/orphic-grimoire">Orphic Grimoire by Medusa&#39;s Disco</a></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4pKiZJc2K1PbEc6Vhrm0Mm?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2019 and has a runtime of 48 minutes and 7 seconds."
    }
    if (recommendation === "Gustav Holst: The Planets") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01CQ8RI6M&asins=B01CQ8RI6M&linkId=ff5f3cbf943b2311c9582342fc8bda2e&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4v0Xyz0LVToUsSTGdsvKSK?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This work was composed in 1916 and has a runtime of 52 minutes and 2 seconds."
    }
    if (recommendation === "Olivia Rodrigo: Sour") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B092HCV2N7&asins=B092HCV2N7&linkId=236f14a6319d6051971afe24120a4305&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6s84u2TUpR3wdUv4NgKA2j?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2021 and has a runtime of 34 minutes and 46 seceonds."
    }
    if (recommendation === "Billie Eilish: WHEN WE FALL ASLEEP WHERE DO WE GO") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07N3RG76T&asins=B07N3RG76T&linkId=81b5daa0ba180f57b9d8e73b8da8acfa&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0S0KGZnfBGSIssfF54WSJh?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2019 and has a runtime of 42 minutes and 55 seconds."
    }
    if (recommendation === "The Beatles: Revolver") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0041KVYIW&asins=B0041KVYIW&linkId=5444dee76015578ba67da47d7edd1e06&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3PRoXYsngSwjEQWR5PsHWR?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1966 and has a runtime of 34 minutes and 45 seconds."
    }
    if (recommendation === "Goose: Shenanigans Nite Club") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B092L5VZBX&asins=B092L5VZBX&linkId=76ae58d7d148cb997f895872a08760a5&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'  

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0zn4Q9R93FrhlMPdG9QMF5?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2021 and has a runtime of 1 hour and 3 minutes"
    }
    if (recommendation === "WILLOW: WILLOW") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B085DSR4HZ&asins=B085DSR4HZ&linkId=e0e95acef2acddb660ab84961a544eb3&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
       
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4B2pV5Zds6478QOqA8yqdj?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>' 

      year.innerHTML = "This album was released in 2019 and has a runtime of 22 minutes and 33 seconds."
    }
    if (recommendation === "Tame Impala: The Slow Rush") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07ZKV1WHJ&asins=B07ZKV1WHJ&linkId=706d33902e90a9694ccd7f085bb8232e&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/31qVWUdRrlb8thMvts0yYL?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2020 and has a runtime 57 minutes and 27 seconds."
    }
    if (recommendation === "Panic! At The Disco: Pretty. Odd.") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B001IZID3W&asins=B001IZID3W&linkId=5e399840a1c5a3d173429bf57d43a5f3&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7Hk9WbjPbN1n2GXaK7aldw?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2008 and has a runtime of 48 minutes and 42 seconds."
    }
    if (recommendation === "Panic! At The Disco: Death of a Bachelor") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01C3UJ05K&asins=B01C3UJ05K&linkId=40b9c9710c0326f6d45049591a779012&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6twKQ0EsUJHVlAr6XBylrj?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2016 and has a runtime of 36 minutes and 6 seconds."
    }
    if (recommendation === "Twenty One Pilots: Trench") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07GRM216X&asins=B07GRM216X&linkId=e6736d4f0b0e19b3d02cc297a095bfab&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/621cXqrTSSJi1WqDMSLmbL?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2018 and has a runtime of 56 minutes and 9 seconds."
    }
    if (recommendation === "Babe Rainbow: Changing Colours") {
      vinylLink.innerHTML = 'Check out the vinyl copy of this album on the <a href="https://flightlessrecords.com/collections/vinyl/products/copy-of-babe-rainbow-changing-colours-greenroom-limited-edition-pre-order"> Flightless Records </a> website.'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3iGL9DxxGQqkFqGgSd03q1?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2021 and has a runtime of 40 minutes and 14 seconds."
    }
    if (recommendation === "St. Vincent: Daddy's Home") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08X623ZZC&asins=B08X623ZZC&linkId=360d07281c7dcb0066c9f50dc047b711&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/654KFpNOZ26Hj9luu7aKeM?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2021 and has a runtime of 43 minutes and 15 seconds."
    }
    if (recommendation === "Audioslave: Audioslave") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B072WJVDB6&asins=B072WJVDB6&linkId=57f803cf7128fbd2823bac67b5167d49&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/78guAsers0klWl6RwzgDLd?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2002 and has a runtime of 1 hour and 5 minutes."
    }
    if (recommendation === "Jack White: Boarding House Reach") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07923NK88&asins=B07923NK88&linkId=212c2862118dbac0dad079b1a18461ec&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6btUx9G2BPajQ7P6mpTxId?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2018 and has a runtime of 44 minutes and 13 seconds. "
    }
    if (recommendation === "Ashe: Ashlyn") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B091Z2LZ63&asins=B091Z2LZ63&linkId=79a21a884ef027ff2f996a7cc64ce3bc&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5eCmZVM5Kspu2B1cyVdSqq?theme-0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2021 and has a runtime of "
    }
    if (recommendation === "Dirty Honey: Dirty Honey") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08V18Z4GR&asins=B08V18Z4GR&linkId=40473c0f8945cc9cd8be97c002c07220&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0vyPTdAxmOLpOHHAkWJAa0?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'  

      year.innerHTML = "This album was released in 2021 and has a runtime of 29 minutes and 39 seconds."
    }
    if (recommendation === "FINNEAS: Blood Harmony(Deluxe)") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08QWH3CC9&asins=B08QWH3CC9&linkId=6c21a383da2501e5308ac84a8b1cd5fb&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1O1Ulu4uuaceAzsNfN7ks0?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2020 and has a runtime of 31 minutes adn 13 seconds."
    }
    if (recommendation === "Plini: Impulse Voices") {
      vinylLink.innerHTML = "Check out the vinyl version of this on the <a href='https://www.sheethappenspublishing.com/shop/1118/plini-impulse-voices-vanilla-grapefruit-haze-vinyl'> Sheet Happens <a/> website."

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/36vhZCfOCcpgEk7tXWBUdZ?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2020 and has a runtime of 38 minutes and 30 seconds."
    }
    if (recommendation === "The Cars: The Cars") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B002LBGBMW&asins=B002LBGBMW&linkId=e525faf25d50e3a83061e97d6d5d05a6&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4tJPWT4r4FSKwy784Qs1Fq?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1978 and has a runtime of 35 minutes and 22 seconds. "
    } 
    if (recommendation === "Covet: effloresce") {
      vinylLink.innerHTML = "Covet has not released this album on vinyl yet, however, if you'd like to support them, head over to their <a href='https://covetband.bandcamp.com/album/effloresce'> Bandcamp</a>."

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1vvBlvKIqeQDPJbDkt0Xny?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2018 and has a runtime of 31 minutes and 2 seconds."
    } 
    if (recommendation === "Too Many Zooz: Subway Gawdz") {
      vinylLink.innerHTML = "Too Many Zooz has not released this album on vinyl yet, however, if you'd like to support them, head over to their <a href='https://toomanyzooz.bandcamp.com/album/subway-gawdz'> Bandcamp</a>."

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0GvhshU38CjwxkvWAmbXS0?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2016 and has a runtime of 42 minutes and 9 seconds."
    }
    if (recommendation === "Jessie Ware: What's Your Pleasure") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0915Q8WXN&asins=B0915Q8WXN&linkId=04dbda9aaf453f37b4ddf46cd2f673b9&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1CTm3ARqDETSm7GfvNYNJp?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2020 and has a runtime of 53 minutes and 24 seconds."
    }
    if (recommendation === "Khun Narin: II") {
      vinylLink.innerHTML = '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2182603803/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://khunnarin.bandcamp.com/album/ii">II by Khun Narin</a></iframe>'
       
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/30bnUuR6xbyJSqzhrjYreM?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2016 and has a runtime of 39 minutes and 55 seconds."
    }
    if (recommendation === "Jain: Zanaka(Deluxe)") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01A7VTJ44&asins=B01A7VTJ44&linkId=1d121d594af8452e82fa77e8ab42d34b&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/2rb6C1wUwk7hFOVmfgt19k?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2016 and has a runtime of 54 minutes and 35 seconds. "
    }
    if (recommendation === "Tommy Emanuel: The Best of Tommysongs") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0863TM64G&asins=B0863TM64G&linkId=3a6a933e068a0b9396ca10cb6127403b&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/32jU6NosOd3HMiQ2BneGhg?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2020 and has a runtime of 1 hour and 18 minutes. "
    }
    if (recommendation === "Peter Frampton: Frampton Comes Alive!") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00008EO0F&asins=B00008EO0F&linkId=bc7ecdb5d584b1e6d6bcdc24672ee286&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1SJZWjxsSbKvSycxDfnwcN?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1976 and has a runtime of 1 hour and 17 minutes."
    }
    if (recommendation === "Frankie and the Witch Fingers: Monsters Eating People Eating Monsters...") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08BDZ2K3L&asins=B08BDZ2K3L&linkId=dca5a786981b8caea2f971ba768c7df0&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/27dPrUSqqstTfOsTRCRiOT?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2020 and has a runtime of 45 minutes and 7 seconds."
    }
    if (recommendation === "Parcels: Live Vol. 1") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08761CNTQ&asins=B08761CNTQ&linkId=e3fbf615758461b73e3ed8b36a14346a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4ckyPfMqe26PrOgEWdjWns?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2020 and has a runtime of 1 hour and 4 minutes."
    }  
    if (recommendation === "Goose: Moon Cabin") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01BFZ261O&asins=B01BFZ261O&linkId=369f7a5df48625f08edb693325d9aa70&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>' 

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/2yBCrmF3Cv2kqLFLc6kOxg?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was releasd in 2016 and has a runtime 55 minutes and 2 seconds."
    }
    if (recommendation === "Nazareth: Hair Of The Dog") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07P6NCXY4&asins=B07P6NCXY4&linkId=7b4739cb832c6d49847cb03ec10a9c36&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5Zwyrn62m3Pyc0nvRa9CHF?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1975 and has a runtime of 40 minutes and 34 seconds."
    }
    if (recommendation === "Deep Purple: Machine Head") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B016AAL1XI&asins=B016AAL1XI&linkId=571495722feb495e9f51ea33b6a00fb7&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1EK3a0Yctg4d3nGQzE4Uty?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1972 and has a runtime of 37 minutes and 46 seconds."
    }
    if (recommendation === "Mike Oldfield: Tubular Bells") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0026S1XDC&asins=B0026S1XDC&linkId=6db6faefe79e1174bcf5413124f8bec5&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0a3YQpBnRzJzNktOjb6Dum?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1973 and has a run time of 56 minutes and 7 seconds."
    }
    if (recommendation === "Led Zeppelin: Coda(Deluxe Edition)") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00YB9BLI6&asins=B00YB9BLI6&linkId=fce050d6ae71aa64b2fc0684af185088&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/56G9UnPmRifbubzPDJfAyd?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1982 and has a runtime of 1 hour and 37 minutes."
    }
    if (recommendation === "King Gizzard & The Lizard Wizard: I'm In Your Mind Fuzz") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00NYD54WY&asins=B00NYD54WY&linkId=83d4f059bd282a8870ee2b7fb94f5aa1&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1rb4cp4F59Tk1UOPHuP3H0?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2014 and has a runtime of 42 minutes and 3 seconds."
    }
    if (recommendation === "King Gizzard & The Lizard Wizard: Infest The Rats' Nest") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07TJKBH7C&asins=B07TJKBH7C&linkId=c5d93b6c247ffcbfc5b7d40fe47baf0f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5Bz2LxOp0wz7ov0T9WiRmc?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2019 and has a run time of 34 minutes and 54 seconds."
    }
    if (recommendation === "Greta Van Fleet: From The Fires") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07NR8KRG5&asins=B07NR8KRG5&linkId=d45a5b42559c60b09a6c354091f65f15&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6uSnHSIBGKUiW1uKQLYZ7w?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This double EP was released in 2017 and has a runtime of 32 minutes and 11 seconds."
    }
    if (recommendation === "Chon: Chon") {
      vinylLink.innerHTML ='<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07S28YJCG&asins=B07S28YJCG&linkId=3589e433f1eb3d1fa6a2d9490fc654bb&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/31xSTnqna5WeOdCN0AJMNJ?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2019 and has a runtime of 36 minutes and 7 seconds."
    }
    if (recommendation === "The Beatles: Let It Be") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0041KVZ1S&asins=B0041KVZ1S&linkId=36f519de58506a30c62e6534e00805c4&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0jTGHV5xqHPvEcwL8f6YU5?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1970 and has a runtime of 35 minutes and 10 seconds."
    }
    if (recommendation === "The Beatles: Abbey Road") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07VNS48HD&asins=B07VNS48HD&linkId=e2501eb4864e4ed4f9e5bf1eddfe9a46&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0ETFjACtuP2ADo6LFhL6HN?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1969 and has a runtime of 47 minutes and 29 seconds."
    }
    if (recommendation === "Aerosmith: Aerosmith") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00CJ7XYIC&asins=B00CJ7XYIC&linkId=40ebaecf7615fbc1ef80a0148bf33ff6&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/19lEZSnCCbVEkKchoPQWDZ?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1973 and has a runtime of 35 minutes and 42 seconds."
    }
    if (recommendation === "Aerosmith: Permanent Vacation") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01LTHOB6Q&asins=B01LTHOB6Q&linkId=79d179f18f46d8efe628245ad471773d&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3XYqOJI1YlX40kJTdzFEzp?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1987 and has a runtime of 51 minutes and 53 seconds."
    }
    if (recommendation === "Amy Wineouse: Back to Black") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B000P5FG1I&asins=B000P5FG1I&linkId=d8b595b8f801fb516de9bd5367d45a81&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/097eYvf9NKjFnv4xA9s2oV?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2006 and has a runtime of 34 minutes and 46 seconds. "
    }
    if (recommendation === "Arctic Monkeys: Favorite Wort Nightmare") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00AG477CE&asins=B00AG477CE&linkId=9c3418842164cc8e0d3c2b6f87b515ab&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6rsQnwaoJHxXJRCDBPkBRw?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2007 and has a runtime of 37 minutes and 21 seconds"
    }
    if (recommendation === "Arctic Monkeys: Tranquility Base Hotel & Casino") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07CBF5P54&asins=B07CBF5P54&linkId=d152437395d9253de60e02b61bdbb5f2&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1jeMiSeSnNS0Oys375qegp?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2018 and has a runtime of 40 minutes and 57 seconds."
    }
    if (recommendation === "Ballyhoo!: Daydreams") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07F45CLCL&asins=B07F45CLCL&linkId=aa72962756885f67c62e10c4fe68f4ef&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/2w5cEjSZRJzNl63eC8G4yC?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2011 and has a runtime of 41 minutes and 55 seconds."
    }
    if (recommendation === "The Beach Boys: Pet Sounds") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01DB0EBMS&asins=B01DB0EBMS&linkId=6d0b09092684f882a06f55add7207241&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6GphKx2QAPRoVGWE9D7ou8?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1966 and has a runtime of 35 minutes and 57 seconds."
    }
    if (recommendation === "Beastie Boys: Licensed to Ill") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01I23QZ7I&asins=B01I23QZ7I&linkId=c4ed5ab7f624b6f5d8c1bcfccb99aa7c&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/11oR0ZuqB3ucZwb5TGbZxb?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1986 and has a runtime of 44 minutes and 32 seconds."
    }
    if (recommendation === "The Beatles: Rubber Soul") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0041KVZ0Y&asins=B0041KVZ0Y&linkId=bad969d02be3e36a1ce44c64e64d2df8&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/50o7kf2wLwVmOTVYJOTplm?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1965 and has a run ime of 35 minutes and 32 seconds."
    }
    if (recommendation === "The Beatles: Sgt. Pepper's Lonely Hearts Club Band") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B076W8Y6BB&asins=B076W8Y6BB&linkId=3e83023fefd8871d406706517f126f8a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6QaVfG1pHYl1z15ZxkvVDW?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1967 and has a runtime of 39 minutes and 55 seconds."
    }
    if (recommendation === "Billie Eilish: dont smile at me") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08JWNLHT2&asins=B08JWNLHT2&linkId=fee4027b15b8b9cdfd1b7e177e7ede4c&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7fRrTyKvE4Skh93v97gtcU?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2017 and has a runtime of 28 minutes and 59 seconds."
    }
    if (recommendation === "Billy Joel: The Stranger") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0019HBTD0&asins=B0019HBTD0&linkId=b4d9959e6c4b0332866b2cfd9535ebca&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3IILMjMMnoN2sKzgesX8KV?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1977 and has a runtime of 42 minutes and 33 seconds."
    }
    if (recommendation === "Billy Joel: 52nd Street") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0798GS4PW&asins=B0798GS4PW&linkId=ad47feb2dfcaa0bebb93a3b9be242a5b&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1HmCO8VK98AU6EXPOjGYyI?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1978 and has a runtime of 40 minutes and 25 seconds."
    }
    if (recommendation === "Billy Joel: River of Dreams") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00712KENS&asins=B00712KENS&linkId=6335754e48949adf979a13b2106ee6bf&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4HPnwQJAEvTY910q4RNeOu?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1993 and has a runtime of 49 minutes and 16 seconds."
    }
    if (recommendation === "Black Sabbath: Black Sabbath") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00WASEF7E&asins=B00WASEF7E&linkId=46394eaabb8436a4e6e4421e24afb7f0&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4ZLy3U2q17Yjw7jkjXPJQj?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1970 and has a runtime of 39 minutes and 23 seconds."
    }
    if (recommendation === "Black Sabbath: Master of Reality") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00WASEDVM&asins=B00WASEDVM&linkId=ff6af322f2bc8bc63a3d2abbc4167cbc&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7pGb2cOGVz6vLyaZaKOQ7D?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1971 and has a runtime of 34 minutes and 24 seconds."
    }
    if (recommendation === "Black Sabbath: Paranoid") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00WASEEW0&asins=B00WASEEW0&linkId=8c1d2b5e109596828838a55207c8aacc&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6r7LZXAVueS5DqdrvXJJK7?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1970 and has a runtime of 41 minutes and 48 seconds."
    }
    if (recommendation === "BORNS: Dopamine") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B016WSSGRM&asins=B016WSSGRM&linkId=c1e698d8e38d5718e854644dc6e2676f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/17l7MIu0Jh0tdgK7or9ovw?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2015 and has a runtime of 40 minutes and 30 seconds."
    }
    if (recommendation === "Cage the Elephant: Melophobia") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00EPD3BSG&asins=B00EPD3BSG&linkId=0f7e3944a4c7ca5d77155a55b46c22a4&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4kb0lu1IA0KLuwOrw7uD78?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2013 and has a runtime of 37 minutes and 28 seconds."
    }
    if (recommendation === "Cage the Elephant: Social Cues") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07N9JTFHW&asins=B07N9JTFHW&linkId=392eaa2c854cce9d3cc407c9cb2dd500&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff">0</iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/2VuZJsJBPLwg9BeQFQle8G?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>0'
       
      year.innerHTML = "This album was released in 2019 and has a runtime of 44 minutes and 34 seconds."
    }
    if (recommendation === "Childish Gambino: 'Awaken, My love!'") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01MSJZO88&asins=B01MSJZO88&linkId=3dae98521c8967d52f8e0131d44189f3&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4Carzsnpd6yvuHZ49I0oz8?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2016 and has a runtime of 49 minutes and 1 second."
    }
    if (recommendation === "The Clayool Lennon Delirium: South of Reality") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07JJQ6ZJ9&asins=B07JJQ6ZJ9&linkId=d747e1111253bb7f700602da717c38da&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3KiA7e7NDRMKecw7YGVkZK?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2019 and has a runtime of 47 minutes and 34 seconds."
    }
    if (recommendation === "Cream: Disraeli Gears") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B000UX4D5K&asins=B000UX4D5K&linkId=126b88d265b828bc1c2c95ce576b73dc&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3W6CI0Lw7lElAPID2Fd3B4?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1967 and has a runtime of 33 minutes and 37 seconds. "
    }
    if (recommendation === "The Cult: Sonic Temple") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07TKNGCTP&asins=B07TKNGCTP&linkId=a9218470ef2c93a23d79e29254b7080b&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1mq4iXRVf8lo5kAkeMa9aV?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1989 and has a runtime of 57 minutes and 4 seconds."
    }
    if (recommendation === "David Bowie: Blackstar") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B017VORJLA&asins=B017VORJLA&linkId=57a1682a1dc2a45ee184cfa50d10d566&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff">0</iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/2w1YJXWMIco6EBf0CovvVN?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2016 and has a runtime of 41 minutes and 17 seconds."
    }
    if (recommendation === "David Bowie: The Rise and Fall of Ziggy Stardust") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01AJZ8EMG&asins=B01AJZ8EMG&linkId=6cd6e7b45842118e64c2c8834bd369bd&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/48D1hRORqJq52qsnUYZX56?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1972 and has a runtime of 38 minutes and 39 seconds. "
    }
    if (recommendation === "Disptch: Bang Bang") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08H7DJX7D&asins=B08H7DJX7D&linkId=4f6a16a9da9409e43d3be3c62d54c1d6&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0tN2TkilPoLmqN21UJBC77?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1997 and has a runtime of 50 minutes and 12 seconds."
    }
    if (recommendation === "The Struts: Everybody Wants") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01DDX9X94&asins=B01DDX9X94&linkId=30f2b209e25e61c1292ec4b8fcbf0e95&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7iLnNik9W0ttekJblYrVfj?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2016 and has a runime of 43 minutes and 38 seconds."
    }
    if (recommendation === "Fleetwood Mac: Rumours") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B004OKFISQ&asins=B004OKFISQ&linkId=84a15cc8678aea1a7d1cf98abf6454d7&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3nuRoTy7gi52Z4C0negdw1?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1977 and has a run time of 39 minutes and 43 seconds.0"
    }
    if (recommendation === "Grace Potter: Daylight") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07WQ1P71Z&asins=B07WQ1P71Z&linkId=7443850ee8351ba4c0e292c5d49d20fb&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1ZUZuW2fR7J5JscL8FHpSC?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2019 and has a runtime of 45 minutes and 25 seconds."
    }
    if (recommendation === "Green Day: American Idiot") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B002OHB3IK&asins=B002OHB3IK&linkId=7e2c0c2a917f5015e40adbab0ffbe3a3&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5dN7F9DV0Qg1XRdIgW8rke?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2004 and has a runtime of 57 minutes and 23 seconds."
    }
    if (recommendation === "Harry Styles: Fine Line") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07ZWBNZR4&asins=B07ZWBNZR4&linkId=f27c1dbe9db0447245740cef7f6e7d33&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7xV2TzoaVc0ycW7fwBwAml?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2019 and has a runtime of 46 minutes and 43 seconds."
    }
    if (recommendation === "The Honeydrippers: The Honeydrippers") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B000091N0W&asins=B000091N0W&linkId=8ef8c3cc05b6a43e947ca8abfb9fcb8e&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0fwGgCBAMQ0ItsxR7yBE8O?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This EP was released in 1984 and has a runtime of 22 minutes and 32 seconds. "
    }
    if (recommendation === "I DONT KNOW HOW BUT THEY FOUND ME: RAZZMATAZZ") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08DSSCLCB&asins=B08DSSCLCB&linkId=341816b4466e929b21e39a09dc59fd34&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7q8hYYZgsIQCXibLzwiPll?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2020 and has a runtime of 37 minutes and 20 seconds."
    }
    if (recommendation === "I DONT KNOW HOW BUT THEY FOUND ME: 1981 Extended Play") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07JJ64GHY&asins=B07JJ64GHY&linkId=e694d19cdd07376b1c20fbb058928c37&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6JmnnC2r3mvEFugTomuxWG?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This EP was released in 2018 and has a runtime of 16 minutes."
    }
    if (recommendation === "INXS: Kick") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08HTP4TGJ&asins=B08HTP4TGJ&linkId=916b9596949f00e474514d02f4800634&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7cuwWzS0oiApEt2fpKafkX?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1987 and has a runtime of 39 minutes and 39 seconds."
    }
    if (recommendation === "INXS: X") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00NVY8UHC&asins=B00NVY8UHC&linkId=fa783a337fda6c8861d191ffd1eb064f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/688l8IJXR4cmgGj0Ekl0DR?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1990 and has a runtime of 41 minutes and 39 seconds."
    }
    if (recommendation === "Jack Johnson: In Between Dreams") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0007OY3UC&asins=B0007OY3UC&linkId=fc655e3ae94c7749f46fd2091b163090&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7tTc46dNdE6GGuiQsssWxo?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2005 and has a runtime of 40 minutes and 59 seconds."
    }
    if (recommendation === "Jack White: Lazeretto") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00JXB9T3Q&asins=B00JXB9T3Q&linkId=9e94268746d0522c8f84872fe754c5fb&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/36LXzRarDP8TU8K0REGpt6?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2014 and has a runtime of 39 minutes and 12 seconds."
    }
    if (recommendation === "The Jimi Hendrix Experience: Are You Experienced") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00JFVORBI&asins=B00JFVORBI&linkId=ed4eb099b8d2aa92c19aefcd65aecf2b&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7rSZXXHHvIhF4yUFdaOCy9?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1967 and has a runtime of 1 hour."
    }
    if (recommendation === "King Gizzard & The Lizard Wizard: Flying Microtonal Banana") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01N8Q4GEF&asins=B01N8Q4GEF&linkId=49d06b0994cb30d88fa7742106744bda&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4G9ANFGk9579p2uirMbVT0?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2017 and has a runtime of 41 minutes and 56 seconds."
    }
    if (recommendation === "Led Zeppelin: In Through the Out Door") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00YB9BL0Y&asins=B00YB9BL0Y&linkId=299a37b6094f866decce1ab264b2f05a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1W5CtQ7Ng0kP3lXyz7PIT2?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1979 and has a runtime of 42 minutes and 36 seconds."
    }
    if (recommendation === "Led Zeppelin: Led Zeppelin") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00IXHBMLS&asins=B00IXHBMLS&linkId=de7ecb5e03d8bf65eb276720d5c0e04e&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1J8QW9qsMLx3staWaHpQmU?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1969 and has a runtime of 44 minutes and 53 seconds."
    }
    if (recommendation === "Led Zeppelin: Led Zeppelin II") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00IXHBUG0&asins=B00IXHBUG0&linkId=0b3b33dce088510a3fbcead6d11d6e34&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/58MQ0PLijVHePUonQlK76Y?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1969 and has a runtime of 41 minutes and 37 seconds."
    }
    if (recommendation === "Led Zeppelin: Led Zeppelin III") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00IXHC0QY&asins=B00IXHC0QY&linkId=c588e61d2753ab63fe2e1bb897b09e15&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6P5QHz4XtxOmS5EuiGIPut?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1970 and has a runtime of 43 minutes and 8 seconds."
    }
    if (recommendation === "Led Zeppelin: Led Zeppelin IV") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00KCXECR2&asins=B00KCXECR2&linkId=86d6c980b4997e665e38a4b102afed50&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5EyIDBAqhnlkAHqvPRwdbX?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1971 and has a runtime of 42 minutes and 35 seconds."
    }
    if (recommendation === "Led Zeppelin: Physical Graffiti") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00RUT3AQ0&asins=B00RUT3AQ0&linkId=0f635416169294f3a8d9739957e0bacb&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4Q7cPyiP8cMIlUEHAqeYfd?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1975 and has a runtime of 1 hour and 22 minutes."
    }
    if (recommendation === "Led Zeppelin: Presence") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00YB9BL3G&asins=B00YB9BL3G&linkId=718054b0aa3b2eb161c67fb24c0da4f1&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3uhD8hNpb0m3iIZ18RHH5u?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1976 and has a runtime of 44 minutes and 47 seconds."
    }
    if (recommendation === "Lorde: Melodrama") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B06XH5WZ1V&asins=B06XH5WZ1V&linkId=129496d464e483d1b38c6031923c305c&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/2B87zXm9bOWvAJdkJBTpzF?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2017 and has a runtime of 41 minutes and 2 seconds."
    }
    if (recommendation === "Lorde: Pure Heroine") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00EYRCD8M&asins=B00EYRCD8M&linkId=5a25905b52040ac0fda2561adb073ac9&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0rmhjUgoVa17LZuS8xWQ3v?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2013 and has a runtime of 37 seconds and 11 seconds."
    }
    if (recommendation === "Maroon 5: Songs About Jane") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01HJRBQVI&asins=B01HJRBQVI&linkId=4bc5afc627f2cec59d4da71f2c8baa85&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1Rv9WRKyYhFaGbuYDaQunN?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2002 and has a runtime of 45 minutes and 59 seconds."
    }
    if (recommendation === "Men At Work: Business As Usual") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01N4R9WFX&asins=B01N4R9WFX&linkId=37efd9037e0dc7f984f92b7542d45fb4&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4HDJMKkwAMVFewqfZcmf84?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1981 and has a runtime of 38 minutes and 4 seconds."
    }
    if (recommendation === "Metallica: Kill 'Em All") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01BUX7YY0&asins=B01BUX7YY0&linkId=6151b195d2f1f6fd8154fb139669516c&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0vNBQof86Lv5gLuf26ML7o?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1983 and has a runtime of 51 minutes and 14 seconds."
    }
    if (recommendation === "Metallica: Master of Puppets") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0757JMQG8&asins=B0757JMQG8&linkId=2b4acbf8b362cadaaa6e9de593b04512&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5gzLOflH95LkKYE6XSXE9k?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1986 and has a runtime of 54 minutes and 47 seconds."
    }
    if (recommendation === "Metallica: Ride the Lightning") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01BUX7Z7Q&asins=B01BUX7Z7Q&linkId=f2a79e0a69762fa6096ff01aa0617c93&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1nTvIQEXvygqSIqc2vuwAz?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1984 and has a runtime of 47 minutes and 25 seconds."
    }
    if (recommendation === "The Strokes: The New Abnormal") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B084G2YBG6&asins=B084G2YBG6&linkId=77078ccaeaaf24fb679ccf8c29f3f8c9&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/2xkZV2Hl1Omi8rk2D7t5lN?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2020 and has a runtime of 45 minutes and 10 seconds."
    }
    if (recommendation === "Nine Inch Nails: Pretty Hate Machine") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0052T7JR6&asins=B0052T7JR6&linkId=d8ee065bf1b1c0bb17637332b9727cd0&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3umFHeEpc4yLXtrRcv9gLN?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1989 and has a runtime of 48 minutes and 47 seconds."
    }
    if (recommendation === "Oliver Tree: Ugly is Beautiful") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B08B33TSSP&asins=B08B33TSSP&linkId=59bf377202888b8214f0c579acff78fa&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1HmWQo43Gt8BR2dylfv3o4?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2020 and has a runtime of 37 minutes and 29 seconds."
    }
    if (recommendation === "The Paper Kites: Woodland - EP") {
      vinylLink.innerHTML = 'The Paper Kites do now have this work on vinyl, however, you should check them out at their <a href="https://thepaperkites.com.au">website</a>.'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5l8axHOB8sCsWqfK5XVtbF?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2013 and has a runtime of 24 mintues and 53 seconds."
    }
    if (recommendation === "Pink Floyd: Wish You Were Here") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00536OCZK&asins=B00536OCZK&linkId=72565bbefa27e4495d93d0d90825536f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0bCAjiUamIFqKJsekOYuRw?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1975 and has a runtime of 44 minutes and 12 seconds."
    }
    if (recommendation === "Pink Floyd: The Wall") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00536OCYG&asins=B00536OCYG&linkId=3b3d623bcacdef46d735cf95a3a80831&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5Dbax7G8SWrP9xyzkOvy2F?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1979 and has a runtime of 1 hour and 20 minutes."
    }
    if (recommendation === "Queen: Sheer Heart Attack") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B001FES0J8&asins=B001FES0J8&linkId=2354607fb2eb3298574ceb653f1e5c0a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5CooX2xg5YibepSfjbRFNT?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1974 and has a runtime of 38 minutes and 56 seconds."
    }
    if (recommendation === "The Raconteurs: Broken Boy Soldiers") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B003Z9Q4S0&asins=B003Z9Q4S0&linkId=2556a1ae66a0f5b386ae04da83ad07a3&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4Z1sCXBHHKWCsScOLAfuig?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2006 and has a runtime of 33 minutes and 42 seconds."
    }
    if (recommendation === "The Raconteurs: Consolers of the Lonely") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07RF4KSGC&asins=B07RF4KSGC&linkId=69cefcec7994453b1b845aa89ede6f86&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3yx8gEFlojRtt2WBhmxwfg?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2008 and has a runtime of 55 minutes and 32 seconds."
    }
    if (recommendation === "The Raconteurs: Help Us Stranger") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07QL7SJH8&asins=B07QL7SJH8&linkId=20cb25e9801bedf59d091ef027dae079&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/12rfrkN4eZOpmJUmVzE84M?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2019 and has a runtime of 41 minutes and 17 seconds."
    }
    if (recommendation === "Rage Against the Machine: Rage Against the Machine") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B009A9EYUO&asins=B009A9EYUO&linkId=5eee5e77ada8cc8b3ef553c1c10d54a7&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4LaRYkT4oy47wEuQgkLBul?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1992 and has a runtime of 52 minutes and 48 seconds."
    }
    if (recommendation === "Rage Against the Machine: Evil Empire") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07DV6VWJ4&asins=B07DV6VWJ4&linkId=1ad85f3190dec571edd5ed445bd9c46f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/24E6rDvGDuYFjlGewp4ntF?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1996 and has a runtime of 46 minutes and 25 seconds."
    }
    if (recommendation ===  "Red Hot Chili Peppers: The Getaway") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B01F3RF14O&asins=B01F3RF14O&linkId=fbce77e9c9c01533446ce28cf59a7c9d&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/43otFXrY0bgaq5fB3GrZj6?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2016 and has a runtime of 53 minutes and 47 seconds."
    }
    if (recommendation ===  "Red Hot Chili Peppers: Californication") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B008RW6NUO&asins=B008RW6NUO&linkId=f540ceb45c0a6acf02e92c25519f6473&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0fLhefnjlIV3pGNF9Wo8CD?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1999 and has a runtime of 56 minutes and 28 seconds."
    }
    if (recommendation ===  "The Rolling Stones: Hot Rocks 1964-1971") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0000DJYPB&asins=B0000DJYPB&linkId=629d94fe6e3b0adefabab4d661505657&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0aqZJlugIkTUWW1sa4BANp?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1971 nd has a runtime of 1 hour and 25 minutes."
    }
    if (recommendation ===  "Supertramp: Crime of the Century") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00OJU1OJI&asins=B00OJU1OJI&linkId=a470021395efe2848e8e24a45d93cefb&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/2wrHaulTgqqkVKx0k7Kq4r?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1974 and has a runtime of 44 minutes and 20 seconds."
    }
    if (recommendation ===  "The Sweet: Desolation Boulevard") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0733KHPS2&asins=B0733KHPS2&linkId=2edece56dd95bdb0623b90c7975802f0&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3PsFboiPeObjAc6gbQHt54?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1974 and has a runtime of 43 minutes and 13 seconds."
    }
    if (recommendation ===  "Tame Impala: Currents") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00XBWBWL0&asins=B00XBWBWL0&linkId=bde9354efef8c515fdf1d96f1be27a18&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/79dL7FLiJFOO0EoehUHQBv?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2015 and has a runtime of 51 minutes and 11 seconds."
    }
    if (recommendation ===  "Them Crooked Vultures: Them Crooked Vultures") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B002U4F5YU&asins=B002U4F5YU&linkId=cf578aa275841558ccdeb3d8cdbb3830&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0Z6IBizcq7DLXpenjSHqF3?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2009 and has a runtime of 1 hour and 6 minutes."
    }
    if (recommendation ===  "Van Halen: Van Halen") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00T3YBROM&asins=B00T3YBROM&linkId=35de2954d257d09355c976757e02bd88&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/7DdEbYFPKTZ8KB4z6L4UnQ?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1978 and has a runtime of 35 minutes and 16 seconds."
    }
    if (recommendation ===  "The White Stripes: Elephant") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00BV9RZSO&asins=B00BV9RZSO&linkId=6ba13d6919fd808d284b0152a0951a75&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6D9urpsOWWKtYvF6PaorGE?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2003 and has a runtime of 50 minutes and 51 seconds. "
    }
    if (recommendation ===  "The White Stripes: Icky Thump") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07JZBRGGD&asins=B07JZBRGGD&linkId=dd07d8b39ce9c18a4a96be9b94749dde&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/2DSNJ8bdoYfC6Uydg8ilBC?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2007 and has a runtime of 48 minutes and 21 seconds."
    }
    if (recommendation ===  "The White Stripes: White Blood Cells") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B004D5BNKE&asins=B004D5BNKE&linkId=766ec0af4d7dfae6e05f4b821830ecf3&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6Xvc1TfpVEhDeHhmTQEtp0?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 2001 and has a runtime of 40 minutes and 30 seconds."
    }
    if (recommendation ===  "The Who: Who's Next") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B00AY0JCNW&asins=B00AY0JCNW&linkId=670bf1825a691a6579e30cabf0d9dc18&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/5MqyhhHbT13zsloD3uHhlQ?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       
      year.innerHTML = "This album was released in 1971 and has a runtime of 43 minutes and 38 seconds."
    }
});


var albums = ["Pink Floyd: Dark Side of the Moon", "Led Zeppelin: Houses of the Holy", "Greta Van Fleet: The Battle at Gardens Gate", "Dua Lipa: Future Nostalgia (Moonlight Edition)", "Miley Cyrus: Plastic Hearts", 
"Polyphia: New Levels New Devils", "AC/DC: High Voltage", "Adele: 21", "AMFM: Andy Mowatt's Frequency Movement", "Guns N Roses: Appetite for Destruction", "Medusa's Disco: Orphic Grimoire", "Gustav Holst: The Planets", "Olivia Rodrigo: Sour",
"Billie Eilish: WHEN WE FALL ASLEEP WHERE DO WE GO", "The Beatles: Revolver", "Goose: Shenanigans Nite Club", "WILLOW: WILLOW", "Tame Impala: The Slow Rush", "Panic! At The Disco: Pretty. Odd.",
"Panic! At The Disco: Death of a Bachelor", "Twenty One Pilots: Trench", "Babe Rainbow: Changing Colours", "St. Vincent: Daddy's Home", "Audioslave: Audioslave", "Jack White: Boarding House Reach", "Ashe: Ashlyn",
"Dirty Honey: Dirty Honey", "FINNEAS: Blood Harmony(Deluxe)", "Plini: Impulse Voices", "The Cars: The Cars", "Covet: effloresce", "Too Many Zooz: Subway Gawdz", "Jessie Ware: What's Your Pleasure", "Khun Narin: II", 
"Jain: Zanaka(Deluxe)", "Tommy Emanuel: The Best of Tommysongs", "Peter Frampton: Frampton Comes Alive!", "Frankie and the Witch Fingers: Monsters Eating People Eating Monsters...", "Parcels: Live Vol. 1", "Goose: Moon Cabin", 
"Nazareth: Hair Of The Dog", "Deep Purple: Machine Head", "Mike Oldfield: Tubular Bells", "Led Zeppelin: Coda(Deluxe Edition)", "King Gizzard & The Lizard Wizard: I'm In Your Mind Fuzz", "King Gizzard & The Lizard Wizard: Infest The Rats' Nest",
"Greta Van Fleet: From The Fires", "Chon: Chon", "The Beatles: Let It Be", "The Beatles: Abbey Road", "Aerosmith: Aerosmith", "Aerosmith: Permanent Vacation", "Amy Winehouse: Back to Black", "Arctic Monkeys: Favourite Worst Nightmare", 
"Arctic Monkeys: Tranquility Base Hotel & Casino", "Ballyhoo!: Daydreams" , "The Beach Boys: Pet Sounds", "Beastie Boys: Licensed to Ill", "The Beatles: Rubber Soul", "The Beatles: Sgt. Pepper's Lonely Hearts Club Band",
"Bilie Eilish: dont smile at me", "Billy Joel: The Stranger", "Billy Joel: 52nd Street", "Billy Joel: River of Dreams", /*"The Black Keys: 'Let's Rock'"*/, "Black Sabbath: Black Sabbath", "Black Sabbath: Master of Reality", "Black Sabbath: Paranoid", "BORNS: Dopamine", 
"Cage the Elephant: Melophobia", "Cage the Elephant: Social Cues", "Childish Gambino: 'Awaken, My Love!'", "The Claypool Lennon Delirium: South of Reality", /*"Coldplay: Everyday Life", */ "Cream: Disraeli Gears",
"The Cult: Sonic Temple", /*"The Cure: Kiss Me, Kiss Me, Kiss Me",*/ "David Bowie: Blackstar", "David Bowie: The Rise and Fall of Ziggy Stardust", "Dispatch: Bang Bang", "The Struts: Everybody Wants", /*"Edward Sharpe & The Magnetic Zeroes: Up from Below",*/
/*"Electric Light Orchestra: Out of the Blue", "Fall Out Boy: American Beauty/American Psycho", */"Fleetwood Mac: Rumours", /*"Foo Fighters: The Colour and the Shape", "Foo Fighters: Foo Fighters", "Frankie and the Witch Fingers: Brain Telephone", */ "Grace Potter: Daylight", 
"Green Day: American Idiot", "Harry Styles: Fine Line", "The Honeydrippers: The Honeydrippers", "I DONT KNOW HOW BUT THEY FOUND ME: RAZZMATAZZ", "I DONT KNOW HOW BUT THEY FOUND ME: 1981 Extended Play",
"INXS: Kick", "INXS: X", "Jack Johnson: In Between Dreams", "Jack White: Lazaretto", /*"Jacob Collier: Djesse Vol. 3", "Jet: Get Born",*/ "The Jimi Hendrix Experience: Are You Experienced", 
"King Gizzard & The Lizard Wizard: Flying Microtonal Banana", /*"Le Butcherettes: bi/MENTAL",*/ "Led Zeppelin: In Through the Out Door", "Led Zeppelin: Led Zeppelin", "Led Zeppelin: Led Zeppelin II", 
"Led Zeppelin: Led Zeppelin III", "Led Zeppelin: Led Zeppelin IV", "Led Zeppelin: Physical Graffiti", "Led Zeppelin: Presence", "Lorde: Melodrama", "Lorde: Pure Heroine", "Maroon 5: Songs About Jane", 
"Men At Work: Business As Usual", "Metallica: Kill 'Em All", "Metallcia: Master of Puppets", "Metallica: Ride the Lightning", "The Stokes: The New Abnormal", "Nine Inch Nails: Pretty Hate Machine",
"Oliver Tree: Ugly is Beautiful", "The Paper Kites: Woodland - EP", "Pink Floyd: Wish You Were Here", "Pink Floyd: The Wall", "Queen: Sheer Heart Attack", "The Raconteurs: Broken Boy Solier",
"The Raconteurs: Consolers of the Lonely", "The Raconteurs: Help Us Stranger", "Rage Against the Machine: Rage Against the Machine", "Rage Against the Machine: Evil Empire", "Red Hot Chili Peppers: The Getaway", 
"Red Hot Chili Peppers: Californication", "The Rolling Stones: Hot Rocks 1964-1971", /*"Rush: Rush", "Rush: The Spirit of Radio", */"Supertramp: Crime of the Century", "The Sweet: Desolation Boulevard", 
"Tame Impala: Currents", "Them Crooked Vultures: Them Crooked Vultures", "Van Halen: Van Halen", "The White Stripes: Elephant", "The White Stripes: Icky Thump", "The White Stripes: White Blood Cells", 
"The Who: Who's Next",];
//recommendation = albums, [Math.floor(Math.random() * albums.length)];
console.log(albums.length)







   /*
   || 
    || recommendation === "Polyphia: New Levels, New Devils"  || recommendation === "ACDC: Back in Black"  || recommendation === "Adele: 21" 
    || recommendation === "AMFM: Syphonic Funk Box"  || recommendation ===  "Guns N Roses: Appetite for Destruction" 
    || recommendation === "Medusa's Disco: Orphic Grimore" || recommendation === "Miley Cyrus: Plastic Hearts" || recommendation === "Gustav Host: The Planets"
    || recommendation === "Olivia Rodrigo: Sour"  || recommendation === "Billie Eilish: WHEN WE FALL ASLEEP WHERE DO WE GO" || recommendation === "The Beatles: Revolver"
    || recommendation ===    || recommendation ===    || recommendation ===    || recommendation === 
    
    */