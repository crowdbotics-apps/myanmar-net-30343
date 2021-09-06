import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1864_6584}>
        <View style={styles.View_1864_6585} />
        <View style={styles.View_1864_6586} />
        <View style={styles.View_1864_6587}>
          <Text style={styles.Text_1864_6587}>
            Myanmar Net © 2021. All Rights Reserved.
          </Text>
        </View>
        <View style={styles.View_1864_6588}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
            }}
            style={styles.ImageBackground_1864_6589}
          />
          <View style={styles.View_1864_6590}>
            <Text style={styles.Text_1864_6590}>
              09-765338440 (9:00 AM to 7:30 PM Everyday)
            </Text>
          </View>
          <View style={styles.View_1864_6591}>
            <Text style={styles.Text_1864_6591}>
              No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
            }}
            style={styles.ImageBackground_1864_6592}
          />
        </View>
        <View style={styles.View_1864_6593}>
          <View style={styles.View_1864_6594}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
              }}
              style={styles.ImageBackground_1864_6595}
            />
          </View>
        </View>
        <View style={styles.View_1864_6598}>
          <View style={styles.View_1864_6599} />
          <View style={styles.View_1864_6600}>
            <View style={styles.View_1864_6601}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
                }}
                style={styles.ImageBackground_1864_6602}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_6605}>
          <View style={styles.View_1864_6606} />
          <View style={styles.View_1864_6607}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
              }}
              style={styles.ImageBackground_1864_6608}
            />
          </View>
        </View>
        <View style={styles.View_1864_6611}>
          <View style={styles.View_1864_6612} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
            }}
            style={styles.ImageBackground_1864_6613}
          />
        </View>
        <View style={styles.View_1864_6614}>
          <View style={styles.View_1864_6615}>
            <View style={styles.View_1864_6616}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2734/d465/bafa0800006825fc706e4604d546a756"
                }}
                style={styles.ImageBackground_1864_6617}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1864_6624}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_6625}
        />
      </View>
      <View style={styles.View_1864_6643}>
        <Text style={styles.Text_1864_6643}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          et ipsum imperdiet ut sit et nibh nunc. Massa sed pellentesque
          porttitor posuere convallis fermentum. Molestie et posuere aliquam
          facilisis quis
        </Text>
      </View>
      <View style={styles.View_1864_6644}>
        <Text style={styles.Text_1864_6644}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          et ipsum imperdiet ut sit et nibh nunc. Massa sed pellentesque
          porttitor posuere convallis fermentum. Molestie et posuere aliquam
          facilisis quis
        </Text>
      </View>
      <View style={styles.View_1864_6645}>
        <Text style={styles.Text_1864_6645}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          et ipsum imperdiet ut sit et nibh nunc. Massa sed pellentesque
          porttitor posuere convallis fermentum. Molestie et posuere aliquam
          facilisis quis
        </Text>
      </View>
      <View style={styles.View_1864_6646}>
        <Text style={styles.Text_1864_6646}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          et ipsum imperdiet ut sit et nibh nunc. Massa sed pellentesque
          porttitor posuere convallis fermentum. Molestie et posuere aliquam
          facilisis quis
        </Text>
      </View>
      <View style={styles.View_1864_6647}>
        <Text style={styles.Text_1864_6647}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          et ipsum imperdiet ut sit et nibh nunc. Massa sed pellentesque
          porttitor posuere convallis fermentum. Molestie et posuere aliquam
          facilisis quis
        </Text>
      </View>
      <View style={styles.View_1864_6648}>
        <Text style={styles.Text_1864_6648}>Read more</Text>
      </View>
      <View style={styles.View_1864_6649}>
        <Text style={styles.Text_1864_6649}>Read more</Text>
      </View>
      <View style={styles.View_1864_6650}>
        <Text style={styles.Text_1864_6650}>Read more</Text>
      </View>
      <View style={styles.View_1864_6651}>
        <Text style={styles.Text_1864_6651}>Read more</Text>
      </View>
      <View style={styles.View_1864_6652}>
        <Text style={styles.Text_1864_6652}>Read more</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4933/43d7/a6b8378f123e31077ddd0ee71ce070c7"
        }}
        style={styles.ImageBackground_1864_6653}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd1c/595b/14d0552b610c0acfbe7e72b22c4695b4"
        }}
        style={styles.ImageBackground_1864_6654}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04de/6f48/843ea8abfd332b7dcd687ffb267e2f2b"
        }}
        style={styles.ImageBackground_1864_6655}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7987/19d9/ca3d61033d08f326a06c7257dd1083bf"
        }}
        style={styles.ImageBackground_1864_6656}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d72/d832/8a44b3bce63517a8fb624776087d84a9"
        }}
        style={styles.ImageBackground_1864_6657}
      />
      <View style={styles.View_1864_6658}>
        <Text style={styles.Text_1864_6658}>Tvie (Internet Set-top Box)</Text>
      </View>
      <View style={styles.View_1864_6659}>
        <Text style={styles.Text_1864_6659}>
          Myanmar Net Wi-Fi access for Telenor Users
        </Text>
      </View>
      <View style={styles.View_1864_6660}>
        <Text style={styles.Text_1864_6660}>
          Myanmar Net PLUS Fiber Internet has Arrived
        </Text>
      </View>
      <View style={styles.View_1864_6661}>
        <Text style={styles.Text_1864_6661}>
          “Enjoy Myanmar Cast with Unlimited Internet”
        </Text>
      </View>
      <View style={styles.View_1864_6662}>
        <Text style={styles.Text_1864_6662}>
          Portable &amp; Connect everywhere
        </Text>
      </View>
      <View style={styles.View_1864_6663}>
        <Text style={styles.Text_1864_6663}>24 Januray 2021 </Text>
      </View>
      <View style={styles.View_1864_6664}>
        <Text style={styles.Text_1864_6664}>24 Januray 2021 </Text>
      </View>
      <View style={styles.View_1864_6665}>
        <Text style={styles.Text_1864_6665}>24 Januray 2021 </Text>
      </View>
      <View style={styles.View_1864_6666}>
        <Text style={styles.Text_1864_6666}>24 Januray 2021 </Text>
      </View>
      <View style={styles.View_1864_6667}>
        <Text style={styles.Text_1864_6667}>24 Januray 2021 </Text>
      </View>
      <View style={styles.View_1864_6668}>
        <View style={styles.View_1864_6669}>
          <Text style={styles.Text_1864_6669}>Previous</Text>
        </View>
        <View style={styles.View_1864_6670}>
          <Text style={styles.Text_1864_6670}>1</Text>
        </View>
        <View style={styles.View_1864_6671}>
          <Text style={styles.Text_1864_6671}>2</Text>
        </View>
        <View style={styles.View_1864_6672}>
          <Text style={styles.Text_1864_6672}>3</Text>
        </View>
        <View style={styles.View_1864_6673}>
          <Text style={styles.Text_1864_6673}>4</Text>
        </View>
        <View style={styles.View_1864_6674}>
          <Text style={styles.Text_1864_6674}>Next</Text>
        </View>
        <View style={styles.View_1864_6675} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d676/5868/b180193f0f48f832d87608c4729d064d"
          }}
          style={styles.ImageBackground_1864_6676}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d676/5868/b180193f0f48f832d87608c4729d064d"
          }}
          style={styles.ImageBackground_1864_6677}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d676/5868/b180193f0f48f832d87608c4729d064d"
          }}
          style={styles.ImageBackground_1864_6678}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d676/5868/b180193f0f48f832d87608c4729d064d"
          }}
          style={styles.ImageBackground_1864_6679}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fce6/5cd2/a4e3c9f9ff29e64502a3470eecedf3a0"
          }}
          style={styles.ImageBackground_1864_6680}
        />
      </View>
      <View style={styles.View_1864_6681}>
        <Text style={styles.Text_1864_6681}>News</Text>
      </View>
      <View style={styles.View_1864_6682} />
      <View style={styles.View_1864_6683}>
        <Text style={styles.Text_1864_6683}>Home</Text>
      </View>
      <View style={styles.View_1864_6684}>
        <Text style={styles.Text_1864_6684}>Packages</Text>
      </View>
      <View style={styles.View_1864_6685}>
        <Text style={styles.Text_1864_6685}>News</Text>
      </View>
      <View style={styles.View_1864_6686}>
        <Text style={styles.Text_1864_6686}>Account</Text>
      </View>
      <View style={styles.View_1864_6687}>
        <Text style={styles.Text_1864_6687}>FAQs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a0/6689/02fc154db7272f3035351e6858c578fd"
        }}
        style={styles.ImageBackground_1864_6688}
      />
      <View style={styles.View_1864_6709}>
        <Text style={styles.Text_1864_6709}>Eng</Text>
      </View>
      <View style={styles.View_1864_6710}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_6711}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_6713}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/0c01/88539a39a3670d9f8662e790074e8512"
        }}
        style={styles.ImageBackground_1864_6714}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("205.05464480874318%") },
  View_1864_6584: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("185.5191256830601%")
  },
  View_1864_6585: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(54, 54, 54, 1)"
  },
  View_1864_6586: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.61748633879779%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_6587: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.15277777777778%"),
    top: hp("16.120218579234944%"),
    justifyContent: "flex-start"
  },
  Text_1864_6587: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6588: {
    width: wp("29.097222222222225%"),
    minWidth: wp("29.097222222222225%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.694444444444445%"),
    top: hp("4.098360655737707%")
  },
  ImageBackground_1864_6589: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1388888888888875%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1864_6590: {
    width: wp("20.13888888888889%"),
    minWidth: wp("20.13888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.152777777777777%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_6590: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6591: {
    width: wp("26.944444444444443%"),
    minWidth: wp("26.944444444444443%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.152777777777777%"),
    top: hp("4.234972677595636%"),
    justifyContent: "flex-start"
  },
  Text_1864_6591: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_6592: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    resizeMode: "cover"
  },
  View_1864_6593: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.76388888888889%"),
    top: hp("5.567073300887984%")
  },
  View_1864_6594: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1864_6595: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653165556693921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.056287977430557135%")
  },
  View_1864_6598: {
    width: wp("1.6910821861690943%"),
    minWidth: wp("1.6910821861690943%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28564453125%"),
    top: hp("5.567073300887984%")
  },
  View_1864_6599: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_6600: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.2217277151639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6601: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_6602: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6605: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.80712890625%"),
    top: hp("5.567073300887984%")
  },
  View_1864_6606: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_6607: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_6608: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6611: {
    width: wp("1.6910918553670249%"),
    minWidth: wp("1.6910918553670249%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.32874891493056%"),
    top: hp("5.567073300887984%")
  },
  View_1864_6612: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1864_6613: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.1331433572404137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6614: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.85064019097223%"),
    top: hp("5.567073300887984%")
  },
  View_1864_6615: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_6616: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.1700979764344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11271158854165719%")
  },
  ImageBackground_1864_6617: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6624: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("193.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_6625: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6643: {
    width: wp("48.541666666666664%"),
    minWidth: wp("48.541666666666664%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("24.18032786885246%"),
    justifyContent: "flex-start"
  },
  Text_1864_6643: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6644: {
    width: wp("48.541666666666664%"),
    minWidth: wp("48.541666666666664%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("53.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_1864_6644: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6645: {
    width: wp("48.541666666666664%"),
    minWidth: wp("48.541666666666664%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("82.92349726775956%"),
    justifyContent: "flex-start"
  },
  Text_1864_6645: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6646: {
    width: wp("48.541666666666664%"),
    minWidth: wp("48.541666666666664%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("112.43169398907105%"),
    justifyContent: "flex-start"
  },
  Text_1864_6646: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6647: {
    width: wp("48.541666666666664%"),
    minWidth: wp("48.541666666666664%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("142.21311475409837%"),
    justifyContent: "flex-start"
  },
  Text_1864_6647: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6648: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("33.19672131147541%"),
    justifyContent: "flex-start"
  },
  Text_1864_6648: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6649: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("62.295081967213115%"),
    justifyContent: "flex-start"
  },
  Text_1864_6649: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6650: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("91.93989071038251%"),
    justifyContent: "flex-start"
  },
  Text_1864_6650: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6651: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("121.44808743169399%"),
    justifyContent: "flex-start"
  },
  Text_1864_6651: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6652: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("151.22950819672133%"),
    justifyContent: "flex-start"
  },
  Text_1864_6652: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_6653: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: hp("25.136612021857925%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("18.989071038251364%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_6654: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: hp("25.136612021857925%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("48.63387978142077%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_6655: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: hp("25.136612021857925%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("107.92349726775956%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_6656: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: hp("25.136612021857925%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("78.27868852459017%")
  },
  ImageBackground_1864_6657: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: hp("25.136612021857925%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("137.56830601092895%"),
    resizeMode: "cover"
  },
  View_1864_6658: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("19.53551912568306%"),
    justifyContent: "flex-start"
  },
  Text_1864_6658: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6659: {
    width: wp("22.15277777777778%"),
    minWidth: wp("22.15277777777778%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("48.63387978142077%"),
    justifyContent: "flex-start"
  },
  Text_1864_6659: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6660: {
    width: wp("22.569444444444446%"),
    minWidth: wp("22.569444444444446%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("107.5136612021858%"),
    justifyContent: "flex-start"
  },
  Text_1864_6660: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6661: {
    width: wp("22.63888888888889%"),
    minWidth: wp("22.63888888888889%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("78.27868852459017%"),
    justifyContent: "flex-start"
  },
  Text_1864_6661: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6662: {
    width: wp("15.625%"),
    minWidth: wp("15.625%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("137.56830601092895%"),
    justifyContent: "flex-start"
  },
  Text_1864_6662: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6663: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("38.25136612021858%"),
    justifyContent: "flex-start"
  },
  Text_1864_6663: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6664: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("67.34972677595628%"),
    justifyContent: "flex-start"
  },
  Text_1864_6664: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6665: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("96.99453551912568%"),
    justifyContent: "flex-start"
  },
  Text_1864_6665: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6666: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("126.50273224043715%"),
    justifyContent: "flex-start"
  },
  Text_1864_6666: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6667: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("156.28415300546447%"),
    justifyContent: "flex-start"
  },
  Text_1864_6667: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6668: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("6.422217947537781%"),
    minHeight: hp("6.422217947537781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("171.448087431694%")
  },
  View_1864_6669: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: hp("1.776756745218563%"),
    justifyContent: "flex-start"
  },
  Text_1864_6669: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6670: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222221%"),
    top: hp("1.776756745218563%"),
    justifyContent: "flex-start"
  },
  Text_1864_6670: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6671: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.902777777777779%"),
    top: hp("1.776756745218563%"),
    justifyContent: "flex-start"
  },
  Text_1864_6671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6672: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222221%"),
    top: hp("1.776756745218563%"),
    justifyContent: "flex-start"
  },
  Text_1864_6672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6673: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("1.776756745218563%"),
    justifyContent: "flex-start"
  },
  Text_1864_6673: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6674: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.138888888888893%"),
    top: hp("1.776756745218563%"),
    justifyContent: "flex-start"
  },
  Text_1864_6674: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6675: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0008004610655518718%"),
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1
  },
  ImageBackground_1864_6676: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222221%"),
    top: hp("0.0008004610655518718%")
  },
  ImageBackground_1864_6677: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777771%"),
    top: hp("0.0008004610655518718%")
  },
  ImageBackground_1864_6678: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.902777777777771%"),
    top: hp("0.0008004610655518718%")
  },
  ImageBackground_1864_6679: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.02777777777777%"),
    top: hp("0.0008004610655518718%")
  },
  ImageBackground_1864_6680: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6.422217947537781%"),
    minHeight: hp("6.422217947537781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5625%"),
    top: hp("0%")
  },
  View_1864_6681: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_1864_6681: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6682: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 60, 145, 1)"
  },
  View_1864_6683: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.458333333333332%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_1864_6683: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6684: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.666666666666664%"),
    top: hp("3.6885245901639343%"),
    justifyContent: "flex-start"
  },
  Text_1864_6684: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6685: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.611111111111114%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_1864_6685: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6686: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.611111111111114%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_1864_6686: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6687: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.31944444444444%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_1864_6687: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_6688: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_6709: {
    width: wp("1.875%"),
    minWidth: wp("1.875%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.93055555555556%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_1864_6709: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6710: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.08333333333333%"),
    top: hp("3.9617486338797816%")
  },
  ImageBackground_1864_6711: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_6713: {
    width: wp("0.3472222222222222%"),
    minWidth: wp("0.3472222222222222%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("3.551912568306011%")
  },
  ImageBackground_1864_6714: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
