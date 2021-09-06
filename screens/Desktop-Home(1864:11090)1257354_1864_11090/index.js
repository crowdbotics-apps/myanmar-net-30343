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
      <View style={styles.View_1864_11099} />
      <View style={styles.View_1864_11100}>
        <Text style={styles.Text_1864_11100}>Maximum speed</Text>
      </View>
      <View style={styles.View_1864_11101}>
        <Text style={styles.Text_1864_11101}>1.4Mbps</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672e/54cc/703e70ec85130415365dea83fc1ad7fa"
        }}
        style={styles.ImageBackground_1864_11102}
      />
      <View style={styles.View_1864_11103} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_11104}
      />
      <View style={styles.View_1864_11105}>
        <Text style={styles.Text_1864_11105}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_11106}>
        <Text style={styles.Text_1864_11106}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_11107}>
        <Text style={styles.Text_1864_11107}>-</Text>
      </View>
      <View style={styles.View_1864_11108}>
        <Text style={styles.Text_1864_11108}>-</Text>
      </View>
      <View style={styles.View_1864_11109}>
        <Text style={styles.Text_1864_11109}>
          Monthly account card-R -1.4 Mbps
        </Text>
      </View>
      <View style={styles.View_1864_11110}>
        <Text style={styles.Text_1864_11110}>Active Packs (1)</Text>
      </View>
      <View style={styles.View_1864_11111}>
        <Text style={styles.Text_1864_11111}>Internet</Text>
      </View>
      <View style={styles.View_1864_11112}>
        <Text style={styles.Text_1864_11112}>010079871</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5121/cf5b/9f99cb6b2c6b312b88eaf3a8dc8c95c7"
        }}
        style={styles.ImageBackground_1864_11113}
      />
      <View style={styles.View_1864_11114} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/0c01/88539a39a3670d9f8662e790074e8512"
        }}
        style={styles.ImageBackground_1864_11115}
      />
      <View style={styles.View_1864_11116}>
        <Text style={styles.Text_1864_11116}>Home</Text>
      </View>
      <View style={styles.View_1864_11117}>
        <Text style={styles.Text_1864_11117}>Account</Text>
      </View>
      <View style={styles.View_1864_11118}>
        <Text style={styles.Text_1864_11118}>FAQs</Text>
      </View>
      <View style={styles.View_1864_11119}>
        <Text style={styles.Text_1864_11119}>Eng</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a0/6689/02fc154db7272f3035351e6858c578fd"
        }}
        style={styles.ImageBackground_1864_11120}
      />
      <View style={styles.View_1864_11141}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_11142}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_11144}
      />
      <View style={styles.View_1864_11145}>
        <View style={styles.View_1864_11146} />
        <View style={styles.View_1864_11147} />
        <View style={styles.View_1864_11148}>
          <Text style={styles.Text_1864_11148}>
            Myanmar Net © 2021. All Rights Reserved.
          </Text>
        </View>
        <View style={styles.View_1864_11149}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
            }}
            style={styles.ImageBackground_1864_11150}
          />
          <View style={styles.View_1864_11151}>
            <Text style={styles.Text_1864_11151}>
              09-765338440 (9:00 AM to 7:30 PM Everyday)
            </Text>
          </View>
          <View style={styles.View_1864_11152}>
            <Text style={styles.Text_1864_11152}>
              No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
            }}
            style={styles.ImageBackground_1864_11153}
          />
        </View>
        <View style={styles.View_1864_11154}>
          <View style={styles.View_1864_11155}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
              }}
              style={styles.ImageBackground_1864_11156}
            />
          </View>
        </View>
        <View style={styles.View_1864_11159}>
          <View style={styles.View_1864_11160} />
          <View style={styles.View_1864_11161}>
            <View style={styles.View_1864_11162}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
                }}
                style={styles.ImageBackground_1864_11163}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_11166}>
          <View style={styles.View_1864_11167} />
          <View style={styles.View_1864_11168}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
              }}
              style={styles.ImageBackground_1864_11169}
            />
          </View>
        </View>
        <View style={styles.View_1864_11172}>
          <View style={styles.View_1864_11173} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
            }}
            style={styles.ImageBackground_1864_11174}
          />
        </View>
        <View style={styles.View_1864_11175}>
          <View style={styles.View_1864_11176}>
            <View style={styles.View_1864_11177}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/706d/9cb8/5d037e7bdaf90d0e59934c83a7830364"
                }}
                style={styles.ImageBackground_1864_11178}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1864_11185}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/9499/bac441cb005bd828afa02be8ddc83cad"
          }}
          style={styles.ImageBackground_1864_11186}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("138.25136612021856%") },
  View_1864_11099: {
    width: wp("36.18055555555556%"),
    minWidth: wp("36.18055555555556%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.874999999999996%"),
    top: hp("23.770491803278688%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_11100: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.208333333333336%"),
    top: hp("25.956284153005466%"),
    justifyContent: "flex-start"
  },
  Text_1864_11100: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11101: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.43055555555556%"),
    top: hp("25.81967213114754%"),
    justifyContent: "flex-start"
  },
  Text_1864_11101: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_11102: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.98611111111111%"),
    top: hp("25.683060109289617%"),
    resizeMode: "cover"
  },
  View_1864_11103: {
    width: wp("36.11111111111111%"),
    minWidth: wp("36.11111111111111%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444443%"),
    top: hp("31.967213114754102%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_11104: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.61111111111111%"),
    top: hp("40.30054644808743%")
  },
  View_1864_11105: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%"),
    top: hp("42.759562841530055%"),
    justifyContent: "flex-start"
  },
  Text_1864_11105: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11106: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%"),
    top: hp("45.76502732240437%"),
    justifyContent: "flex-start"
  },
  Text_1864_11106: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11107: {
    width: wp("0.2777777777777778%"),
    minWidth: wp("0.2777777777777778%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.388888888888886%"),
    top: hp("45.76502732240437%"),
    justifyContent: "flex-start"
  },
  Text_1864_11107: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11108: {
    width: wp("0.2777777777777778%"),
    minWidth: wp("0.2777777777777778%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.66666666666667%"),
    top: hp("42.759562841530055%"),
    justifyContent: "flex-start"
  },
  Text_1864_11108: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11109: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%"),
    top: hp("39.61748633879781%"),
    justifyContent: "flex-start"
  },
  Text_1864_11109: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11110: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%"),
    top: hp("34.69945355191257%"),
    justifyContent: "flex-start"
  },
  Text_1864_11110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11111: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444443%"),
    top: hp("18.71584699453552%"),
    justifyContent: "flex-start"
  },
  Text_1864_11111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11112: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.958333333333336%"),
    top: hp("13.387978142076504%"),
    justifyContent: "flex-start"
  },
  Text_1864_11112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_11113: {
    width: wp("1.8057105276319714%"),
    minWidth: wp("1.8057105276319714%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.73611111111111%"),
    top: hp("12.978142076502733%"),
    resizeMode: "cover"
  },
  View_1864_11114: {
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
  ImageBackground_1864_11115: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.90277777777778%")
  },
  View_1864_11116: {
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
  Text_1864_11116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11117: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.73611111111111%"),
    top: hp("3.9617486338797816%"),
    justifyContent: "flex-start"
  },
  Text_1864_11117: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11118: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.72222222222222%"),
    top: hp("4.098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1864_11118: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11119: {
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
  Text_1864_11119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_11120: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_11141: {
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
  ImageBackground_1864_11142: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_11144: {
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
  View_1864_11145: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("118.71584699453553%")
  },
  View_1864_11146: {
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
  View_1864_11147: {
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
  View_1864_11148: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.15277777777778%"),
    top: hp("16.120218579234972%"),
    justifyContent: "flex-start"
  },
  Text_1864_11148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11149: {
    width: wp("29.097222222222225%"),
    minWidth: wp("29.097222222222225%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.694444444444445%"),
    top: hp("4.098360655737693%")
  },
  ImageBackground_1864_11150: {
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
  View_1864_11151: {
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
  Text_1864_11151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11152: {
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
  Text_1864_11152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_11153: {
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
  View_1864_11154: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.76388888888889%"),
    top: hp("5.567073300887969%")
  },
  View_1864_11155: {
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
  ImageBackground_1864_11156: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653832607582046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05635579427084281%")
  },
  View_1864_11159: {
    width: wp("1.6910821861690943%"),
    minWidth: wp("1.6910821861690943%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28564453125%"),
    top: hp("5.567073300887969%")
  },
  View_1864_11160: {
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
  View_1864_11161: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.22179442025273488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_11162: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_11163: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_11166: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.80712890625%"),
    top: hp("5.567073300887969%")
  },
  View_1864_11167: {
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
  View_1864_11168: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_11169: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_11172: {
    width: wp("1.6910918553670249%"),
    minWidth: wp("1.6910918553670249%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.32874891493056%"),
    top: hp("5.567073300887969%")
  },
  View_1864_11173: {
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
  ImageBackground_1864_11174: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027146184%")
  },
  View_1864_11175: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.85064019097223%"),
    top: hp("5.567073300887969%")
  },
  View_1864_11176: {
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
  View_1864_11177: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.17009797643443392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11277940538194287%")
  },
  ImageBackground_1864_11178: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_11185: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("126.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_11186: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
