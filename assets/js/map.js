    // load the map
    var mymap = L.map('mapid').setView([55.940718, -36.894996], 2);
    // load the tiles
    L.tileLayer('https://api.mapbox.com/styles/v1/rjhargreaves/cjcv3d22i04bp2rpza7tjx1c4/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmpoYXJncmVhdmVzIiwiYSI6ImNpa3JmbDJiazAwMDF3Y20xMHoyaXowdDAifQ.78vWSemMDwn42TwMuxfODw', {minZoom:2, maxZoom: 18, attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' 
      + 
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    
    }).addTo(mymap);
    
    mymap.bounds = [],

        mymap.setMaxBounds([
            [-90, -210],
            [90, 210]
            ]);


    L.marker([69.756754, 27.009036]).addTo(mymap)
    	.bindPopup('<a href="pdfs/UGDis.pdf" target="_blank">Dissertation</a><br />Kevo Valley, Finland')

    L.marker([50.673916, -1.285024]).addTo(mymap)
    	.bindPopup('<a href="pdfs/IOW_Solar_Farm.pdf" target="_blank">Solar Farm</a><br />Multi-Criteria Decision Analysis')

    L.marker([51.524234, -0.134330]).addTo(mymap)
    	.bindPopup('<a href="http://autode.sk/2FbaeLx" target="_blank">LOD4 BIM Model</a><br />Room 102, Chadwick Building<br /> UCL')

    L.marker([50.791555, -1.084179]).addTo(mymap)
    	.bindPopup('<a href="https://docs.google.com/presentation/d/19qBe59mBcVpQ4JypYCT5Tl6ylXplzOUEaJ524e8bwCE/edit?usp=sharing" target="_blank">Urban Heat Island Effect</a><br />Southsea<br />Portsmouth')

    L.marker([44.270376, -71.303289]).addTo(mymap)
    	.bindPopup('<a href="pdfs/Mount_Washington.pdf" target="_blank">Wind Characteristics</a><br />The fastest place on earth<br />Mount Washington, NH, USA')

    L.marker([78.393985, 16.992588]).addTo(mymap)
    	.bindPopup('<a href="pdfs/Tunabreen.pdf" target="_blank">Glacial Surges 2002 to 2010</a><br />Tunabreen<br />Svalbard')

    L.marker([42.357728, -71.060226]).addTo(mymap)
        .bindPopup('<a href="pdfs/BostonSankey.html" target="_blank">Sankey Diagram</a><br />2017 311 Calls<br />Boston, MA, USA')



