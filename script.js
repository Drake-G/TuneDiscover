//recommendation = albums[Math.floor(Math.random() * albums.length)];
var vinylLink = document.getElementById("vinylLink");
var link = document.getElementById("link");
var spotify = document.getElementById("spotify");
var cover = document.getElementById("cover");
var year = document.getElementById("year");
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

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/6s84u2TUpR3wdUv4NgKA2j" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2021 and has a runtime of 34 minutes and 46 seceonds."
    }
    if (recommendation === "Billie Eilish: WHEN WE FALL ASLEEP WHERE DO WE GO") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B07N3RG76T&asins=B07N3RG76T&linkId=81b5daa0ba180f57b9d8e73b8da8acfa&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0S0KGZnfBGSIssfF54WSJh?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2019 and has a runtime of 42 minutes and 55 seconds."
    }
    if (recommendation === "The Beatles: Revolver") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B0041KVYIW&asins=B0041KVYIW&linkId=5444dee76015578ba67da47d7edd1e06&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3PRoXYsngSwjEQWR5PsHWR" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1966 and has a runtime of 34 minutes and 45 seconds."
    }
    if (recommendation === "Goose: Shenanigans Nite Club") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B092L5VZBX&asins=B092L5VZBX&linkId=76ae58d7d148cb997f895872a08760a5&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'  

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/0zn4Q9R93FrhlMPdG9QMF5?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 2021 and has a runtime of 1 hour and 3 minutes"
    }
    if (recommendation === "WILLOW: WILLOW") {
      vinylLink.innerHTML = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=tunescope-20&marketplace=amazon&amp;region=US&placement=B085DSR4HZ&asins=B085DSR4HZ&linkId=e0e95acef2acddb660ab84961a544eb3&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=a7a7f0&bg_color=ffffff"></iframe>'
       
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4B2pV5Zds6478QOqA8yqdj" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>' 

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

      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/1O1Ulu4uuaceAzsNfN7ks0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

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





   /*
   || 
    || recommendation === "Polyphia: New Levels, New Devils"  || recommendation === "ACDC: Back in Black"  || recommendation === "Adele: 21" 
    || recommendation === "AMFM: Syphonic Funk Box"  || recommendation ===  "Guns N Roses: Appetite for Destruction" 
    || recommendation === "Medusa's Disco: Orphic Grimore" || recommendation === "Miley Cyrus: Plastic Hearts" || recommendation === "Gustav Host: The Planets"
    || recommendation === "Olivia Rodrigo: Sour"  || recommendation === "Billie Eilish: WHEN WE FALL ASLEEP WHERE DO WE GO" || recommendation === "The Beatles: Revolver"
    || recommendation ===    || recommendation ===    || recommendation ===    || recommendation === 
    
    */
    
    

        
});


var albums = ["Pink Floyd: Dark Side of the Moon", "Led Zeppelin: Houses of the Holy", "Greta Van Fleet: The Battle at Gardens Gate", "Dua Lipa: Future Nostalgia (Moonlight Edition)", "Miley Cyrus: Plastic Hearts", 
"Polyphia: New Levels New Devils", "AC/DC: High Voltage", "Adele: 21", "AMFM: Andy Mowatt's Frequency Movement", "Guns N Roses: Appetite for Destruction", "Medusa's Disco: Orphic Grimoire", "Gustav Holst: The Planets", "Olivia Rodrigo: Sour",
"Billie Eilish: WHEN WE FALL ASLEEP WHERE DO WE GO", "The Beatles: Revolver", "Goose: Shenanigans Nite Club", "WILLOW: WILLOW", "Tame Impala: The Slow Rush", "Panic! At The Disco: Pretty. Odd.",
"Panic! At The Disco: Death of a Bachelor", "Twenty One Pilots: Trench", "Babe Rainbow: Changing Colours", "St. Vincent: Daddy's Home", "Audioslave: Audioslave", "Jack White: Boarding House Reach", "Ashe: Ashlyn",
"Dirty Honey: Dirty Honey", "FINNEAS: Blood Harmony(Deluxe)", "Plini: Impulse Voices", "The Cars: The Cars", "Covet: effloresce", "Too Many Zooz: Subway Gawdz", "Jessie Ware: What's Your Pleasure", "Khun Narin: II", /*
"Jain: Zanka(Deluxe)", "Tommy Emanuel: The Best of Tommysongs", "Peter Frampton: Frampton Comes Alive!", "Frankie and the Witch Fingers: Monsters Eating People Eating Monsters", "Parcels: Live Vol. 1", "Goose: Moon Cabin", 
"Nazareth: Hair Of The Dog", "Deep Purple: Machine Head", "Mike Oldfield: Tubular Bells", "Led Zeppelin: Coda(Deluxe Edition)", "King Gizzard & The Lizzard Wizard: I'm In Your Mind Fuzz", "King Gizzard & The Lizard Wizard: Infest The Rats' Nest",
"Greta Van Fleet: From The Fires", "Chon: Chon", "The Beatles: Let It Be", "The Beatles: Abbey Road", "Polyphia: The Most Hated", "Aerosmith: Aerosmith", "Aerosmith: Permanent Vacation", "Amy Winehouse: Back to Black", "Arctic Monkeys: Favourite Worst Nightmare", 
"Arctic Monkeys: Tranquility Base Hotel & Casino", "Ballyhoo!: Daydreams", "The Beach Boys: Pet Sounds", "Beastie Boys: Licensed to Ill", "The Beatles: Rubber Soul", "The Beatles: Sgt. Pepper's Lonely Hearts Club Band",
"Bilie Eilish: dont smile at me", "Billy Joel: The Stranger", "Billy Joel: 52nd Street", "Billy Joel: River of Dreams", "The Black Keys: 'Let's Rock'", "Black Sabbath: Black Sabbath", "Black Sabbath: Master of Reality", "Black Sabbath: Paranoid", "BORNS: Dopamine", 
"Cage the Elephant: Melophobia", "Cage the Elephant: Socail Cues", "Childish Gambino: 'Awaken, My Love!'", "The Claypool Lennon Delirium: South of Reality", "Coldplay: Everyday Life", "Cream: Disraeli Gears",
"The Cult: Sonic Temple", "The Cure: Kiss Me, Kiss Me, Kiss Me", "David Bowie: Blackstar", "David Bowie: The Rise and Fall of Ziggy Stardust", "Dispatch: Bang Bang", "The Struts: Everybody Wants", "Edward Sharpe & The Magnetic Zeroes: Up from Below",
"Electric Light Orchestra: Out of the Blue", "Fall Out Boy: American Beauty/American Psycho", "Fleetwood Mac: Rumours", "Foo Fighters: The Colour and the Shape", "Foo Fighters: Foo Fighters", "Frankie and the Witch Fingers: Brain Telephone", "Grace Potter: Daylight", 
"Green Day: American Idiot", "Harry Styles: Fine Line", "The Honeydrippers: The Honeydrippers", "I DONT KNOW HOW BUT THEY FOUND ME: RAZZMATAZZ", "I DONT KNOW HOW BUT THEY FOUND ME: 1981 Extended Play",
"INXS: Kick", "INXS: X", "Jack Johnson: In Between Dreams", "Jack White: Lazaretto", "Jacob Collier: Djesse Vol. 3", "Jet: Get Born", "The Jimi Hendrix Experience: Are You Experienced",
"King Gizzard & The Lizard Wizard: Flying Microtonal Banana", "Le Butcherettes: bi/MENTAL", "Led Zeppelin: In Through the Out Door", "Led Zeppelin: Led Zeppelin", "Led Zeppelin: Led Zeppelin II", 
"Led Zeppelin: Led Zeppelin III", "Led Zeppelin: Led Zeppelin IV", "Led Zeppelin: Physical Graffiti", "Led Zeppelin: Presence", "Lorde: Melodrama", "Lorde: Pure Heroine", "Maroon 5: Songs About Jane", 
"Men At Work: Business As Usual", "Metallica: Kill 'Em All", "Metallcia: Master of Puppets", "Metallica: Ride the Lightning", "The Stokes: The New Abnormal", "Nine Inch Nails: Pretty Hate Machine",
"Oliver Tree: Ugly is Beautiful", "The Paper Kites: Woodland - EP", "Pink Floyd: Wish You Were Here", "Pink Floyd: The Wall", "Queen: Sheer Heart Attack", "The Raconteurs: Broken Boy Solier",
"The Raconteurs: Consolers of the Lonely", "The Raconteurs: Help Us Stranger", "Rage Against the Machine: Rage Against the Machine", "Rage Against the Machine: Evil Empire", "Red Hot Chili Peppers: The Getaway", 
"Red Hot Chili Peppers: Californication", "The Rolling Stones: Hot Rocks 1964-1971", "Rush: Rush", "Rush: The Spirit of Radio", "Supertramp: Crime of the Century", "The Sweet: Desolation Boulevard", 
"Tame Impala: Currents", "Them Crooked Vultures: Them Crooked Vultures", "Van Halen: Van Halen", "The White Stripes: Elephant", "The White Stripes: Icky Thump", "The White Stripes: White Blood Cells", 
"The Who: Who's Next",*/];
//recommendation = albums, [Math.floor(Math.random() * albums.length)];
console.log(albums.length)