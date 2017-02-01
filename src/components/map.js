1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
import React, { Component } from 'react'
import { Link,Router, Route, IndexRoute, hashHistory } from "react-router";
import {Map, Marker, InfoWindow} from "google-maps-react";
import {GoogleApiWrapper} from 'google-maps-react'


export class Container extends Component{

    constructor(props, context){
        super(props, context)
        this.onMapMoved = this.onMapMoved.bind(this)
        this.onInfoWindowClose = this.onInfoWindowClose.bind(this)
        this.onMarkerClick = this.onMarkerClick.bind(this)
        this.onMapClicked = this.onMapClicked.bind(this)
        this.state ={
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            currentindex: 0,
            currentLocation: {lat: 39.7084, lng: -91.3585}
        }
    }

    onMapMoved(props, map) {
        const center = map.center
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onInfoWindowClose() {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null,
            currentLocation: {lat: 37.410616, lng: -89.437030}
        })
    }

    onMapClicked(props) {
        var coordarray = [{lat: 39.7084, lng: -91.3645}, {lat: 38.955047, lng: -90.490447} ,{lat: 37.410616, lng: -89.437030}, {lat: 37.051256, lng: -89.384827}, {lat: 37.044401, lng: -89.239258}, {lat: 36.5712, lng: -89.1862}, {lat: 35.747152, lng: -89.837124}, {lat: 34.714358, lng: -90.754628}, {lat:33.751632, lng: -91.159736}, {lat:33.731421, lng: -91.176118},{lat: 33.114956, lng: -91.121864}, {lat: 33.011229, lng: -91.228123}, {lat: 32.978979, lng: -91.333866}]
        var nextIndex = (this.state.currentindex + 1)%13;
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
                currentindex: nextIndex,
                currentLocation: coordarray[nextIndex]
            })
        }
    }


    render() {

        if (!this.props.loaded) {
            return <div>Loading...</div>
        }

        var hannibal = <div className = "header7"> St.Petersburg  <br/> <div className = "h7"> Huck begins the book here with widow Watson. Huck here finds his old friend Tom Sawyer who asks him to join a gang. There is a social hierarchy in this town. The adults all hold more power than the children, especially the white adult men.</div></div>

        var p91 = <div className = "header7"> Mississippi River <br/> <div className = "h7"> Huck and Jim are floating down the Mississippi together, Huck attempting to escape from his abusive father, and Jim attempting to escape being sold to New Orleans and escape slavery by getting to a free state. They become friends after meeting each other on the island, and after spending a lot of time with each other on the raft, they become very close. Huck also realizes how good of a friend Jim is to him. However, Huck has many doubts about what he is doing, and at some times, considers turning Jim in, when he says, “Then I thought a minute, and says to myself, h	old on; s’pose you’d ‘a’ done right and give Jim up, would you felt better than what you do now?” (Twain 91), but ultimately decides, “No... I’d feel bad - I’d feel just the same way I do now.” (91), as he values his friendship with Jim more than what he has been taught is morally correct. Though Huck has been conditioned his whole life to believe that slaves are lesser because of their race, Huck begins to abandon this concept, changing the view of class structure in his mind. <br/><img src="img/huckimages/mississippi.png"/></div></div>

        var p56 = <div className = "header7"> * Miss Loftus’ house * <br/> <div className = "h7"> When Huck goes to Miss Loftus’ house dressed as a girl, he intends to find more information on the town’s reaction to his death. He soon discovers that the town believes “most everybody thought it at first. He’ll never know how nigh he come to getting lynched. But before night they changed around and judged it was done by a runaway nigger named Jim” (Twain 56). This shows the effect of the class structure in the justice system. Miss Loftus herself remarks on the fact that they don’t know for sure who murdered Huck. However, since Jim is a runaway slave and thus subverting the establishment, society immediately assumes he is to blame. <br/> <img src="img/huckimages/p56.png"/></div></div>

        var p77 = <div className = "header7"> * Walter Scott Wreck * <br/> <div className = "h7"> While at the Walter Scott wreck, Huck tells Jim stories of kings and dukes. Jim, who was a runaway slave, is used to having to work a great deal without having any power. When Huck tells Jim “they can have just as much as they want; everything belongs to them” (Twain 77). Jim asks Huck what kings and dukes have to do to have so much power, and Huck exclaims, "They don't do nothing! Why, how you talk! They just set around" (Twain 77). In this instance, Jim, having worked his whole life and earned nothing from it, begins to learn about the effect of class on one's life; he realizes that work can produce no tangible effect if another is of a higher class. <br/> <img src="img/huckimages/p77.png"/></div></div>

        var p86 = <div className = "header7"> * A Trick in the Fog * <br/> <div className = "h7"> When Huck finally finds Jim after being lost, he decides to play a trick on him. Jim, who is overjoyed to have finally found Huck, is confused when Huck tells Jim he has been there the whole time. Jim quickly realizes the trick that Huck is playing and gets deeply offended. However, Huck starts to feel badly about his trick and goes to apologize to Jim saying,“Then he got up slow and walked to the wigwam, and went in there without saying anything but that. But that was enough. It made me feel so mean I could almost kissed his foot to get him to take it back. It was fifteen minutes before I could work myself up to go and humble myself to a nigger; but I done it, and I warn’t ever sorry for it afterward, neither. I didn’t do him no more mean tricks, and I wouldn’t done that one if I’d ‘a’ knowed it would make him feel that way” (Twain 86). Huck feels that he shouldn’t have felt bad about Jim since he sees Jim as lower to himself. However, Huck abandons the class structure he has been nurtured to follow by apologizing to Jim. <br/> <img src="img/huckimages/p86.png"/></div></div>

        var p124 = <div className = "header7"> * A Duke and a Dauphin * <br/> <div className = "h7"> When Huck and Jim come across two strangers, the strangers decide to take advantage of the Huck and Jim by professing they are a Duke and a Dauphin from France. Due to their higher status, they believe that they are entitled to better treatment, expecting to be treated as royalty as shown by,  “So Jim and me set to majestying him, and doing this and that and t’other for him, and standing up till he told us we might set down. This done him heaps of good, and so he got cheerful and comfortable.” (Twain 124). The only reason this treatment is seen to be socially acceptable is due to the fact that they are “royalty,” showing the effect of class structure in society and how the upper class is expected to be treated better than the common man. For example, the Duke and Dauphin take Huck and Jim’s beds for the night, to which Huck and Jim do not object to since the men are believed to be “royalty.” <br/> <img src="img/huckimages/p124.png"/></div></div>

        var p132 = <div className = "header7"> Religious Revival <br/> <div className = "h7"> When the dauphin goes to Pokeville, he attends a religious revival meeting, and pretends to be an old pirate of 30 years who has finally changed his ways. He delivers a speech and afterwards, the crowd barrages him with affection, giving him money and kisses from the women. The dauphin “went all through the crowd with his hat, swabbing his eyes, and blessing the people and praising them and thanking them for being so good to the poor pirates away off there…” (Twain 132). The crowd reveres him for his religious actions. The religious commitment one has greatly impacts their standing in society. The audience automatically treats him better since they believe that he is a holy man, and do whatever they can to help make his life easier, such as giving him money and offering him a place to stay for the night. <br/> <img src="img/huckimages/p132.png"/></div></div>

        var p115 = <div className = "header7"> * Family Feud * <br/> <div className = "h7"> The feud between the Grangerfords and Shepherdsons was long-lasting, bitter, and irrational; Huck describes it as follows: “All of a sudden, bang! Bang! Bang! Goes three or four guns - the men had slipped around through the woods and come in from behind without their horses! The boys jumped for the river - both of them hurt-and as they swum down the current the men run along the bank shouting at them and singing out, ‘Kill them, kill them!’” (Twain 115). During Huck’s stay with the Grangerfords, he is very content. However, once he witnesses the shootout between the Grangerfords and their family enemies, the Shepherdsons, he wishes nothing but to get away from the feud. Twain’s portrayal of the Grangerfords and Shepherdsons is to demonstrate that although violence typically occurs between different classes as a result of Marxism, even some of the upper class whites of society had conflict and danger amongst them, in this case, years of feuding and bloodshed. <br/> <img src="img/huckimages/p115.png"/></div></div>

        var p147 = <div className = "header7"> * Lynch Mob * <br/> <div className = "h7"> A lynch mob, enraged, attempts to capture Sherburn and enact their revenge upon him; Huck describes them as such: “The pitifulest thing out is a mob; that’s what an army is - a mob; they don’t fight with courage that’s borrowed from their mass, and from their officers. But a mob without any man at the head of it is beneath pitifulness” (Twain 147). This mob was formed out of the common class conscience which all the participants in the mob shared; they all felt equally wronged by the Sherburn’s abuses of power and congregated as equals in an attempt to fight back. <br/> <img src="img/huckimages/p147.png"/></div></div>

        // @ emerson: events from here on down don't have locations for now

        var p152 = <div className = "header7"> A Scam of a Play <br/> <div className = "h7"> The Duke and the King attempt a new scheme for scamming townspeople. They decide to put on a play and cut the show short in their first showing, which enrages the audience. These viewers, instead of informing others of the fraudulent behavior, would rather have the rest of the town also get scammed. As such, instead of helping out their peers, their mentality is “to go out of here quiet, and talk this show up, and sell the rest of the town!” (Twain 152). The townspeople show how Twain uses marxism to depict the behavior of society. If people are wronged, they want others to be equally wronged, only being out for personal gain. <br/> <img src="img/huckimages/p152.png"/></div></div>

        var p214 = <div className = "header7"> * The Letter Destroyed * <br/> <div className = "h7"> Huck decides to write a letter to Widow Douglas telling her about Jim. Looking at the letter he thinks about how righteous he is for doing this, reminding him of Heaven. However he then starts to think of Jim and of their adventures, and of all the good which Jim has done for him. He realizes that Jim has done nothing wrong and essentially should not be turned in, then rips up the letter exclaiming, “All right, then, I’ll go to hell” (Twain 214). Huck has basically forsaken himself for the sake of Jim. He is defying the class structure he has been brought up with. <br/> <img src="img/huckimages/p214.png"/></div></div>

        var p276 = <div className = "header7"> Shot in the Leg <br/> <div className = "h7"> When Tom gets shot in the leg, Jim urges for the boys to get a doctor. Jim believes this since he knows that if the situation was reversed, Tom would get a doctor for him. Upon hearing this, Huck things to himself, “I knowed he was white inside” (Twain 276). Huck can only justify seeing Jim as compassionate and caring if he views him as white inside, thus illustrating the depth to which the notions of class and race have imbued his outlook on others.<br/> <img src="img/huckimages/p276.png"/> </div></div>

        var p294 = <div className = "header7"> * Freedom from Predetermination * <br/> <div className = "h7"> At the end of the novel, Huck does not desire to become once again indoctrinated into common society; he states, “But I reckon I got to light out for the territory ahead of the rest, because Aunt Sally she’s going to adopt me and sivilize me, and I can’t stand it. I been there before.” (Twain 294). By “sivilizing” Huck, Aunt Sally would enforce societal standards such as proper academic, religious, and moral education. However, Huck feels that by settling out in the territories, he can avoid these social constructs, avoid settling into a class system long since predetermined, and truly forge a life for himself. He desires the freedom to create of himself what he wills, free from the standards which others hope to make him meet. <br/> <img src="img/huckimages/p294.png"/></div></div>
        return (

            <Map google={this.props.google}

        initialCenter = {this.state.currentLocation}
        center = {this.state.currentLocation}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={14}
        onClick={this.onMapClicked}>

    <Marker
        onClick={this.onMarkerClick}
        name={hannibal}
        position={{lat: 39.7084, lng: -91.3645}} />
    <Marker
        onClick={this.onMarkerClick}
        name={p91}
        position={{lat: 37.044401, lng: -89.239258}} />
    <Marker
        onClick={this.onMarkerClick}
        name={p77}
        position={{lat: 37.410616, lng: -89.437030}} />
    <Marker
        onClick={this.onMarkerClick}
        name={p56}
        position={{lat: 38.955047, lng: -90.490447}} />
    <Marker
        onClick={this.onMarkerClick}
    name={p124}
    position={{lat: 35.747152, lng: -89.837124}} />
<Marker
onClick={this.onMarkerClick}
name={p86}
position={{lat: 37.051256, lng: -89.384827}} />
<Marker
onClick={this.onMarkerClick}
name={p115}
position={{lat: 36.5712, lng: -89.1862}} />
<Marker
onClick={this.onMarkerClick}
name={p132}
position={{lat: 34.714358, lng: -90.754628}} />
    <Marker
        onClick={this.onMarkerClick}
        name={p147}
        position={{lat:33.751632, lng: -91.159736}} />
<Marker
onClick={this.onMarkerClick}
name={p152}
position={{lat:33.731421, lng: -91.176118}} />
<Marker
onClick={this.onMarkerClick}
name={p214}
position={{lat: 33.114956, lng: -91.121864}} />
<Marker
onClick={this.onMarkerClick}
name={p276}
position={{lat: 33.011229, lng: -91.228123}} />
<Marker
onClick={this.onMarkerClick}
name={p294}
position={{lat: 32.978979, lng: -91.333866}} />

    <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onInfoWindowClose}>
    <div>
        <h3>{this.state.selectedPlace.name}</h3>
        </div>
        </InfoWindow>
        </Map>
    )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBbGfp8Zr7U_7pvDI2hpB99w1J3kzTRv0c"
})(Container)