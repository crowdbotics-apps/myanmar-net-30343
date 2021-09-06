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
      <View style={styles.View_1864_8693}>
        <Text style={styles.Text_1864_8693}>Entertainment</Text>
      </View>
      <View style={styles.View_1864_8694}>
        <Text style={styles.Text_1864_8694}>Game Myan Pack</Text>
      </View>
      <View style={styles.View_1864_8695}>
        <View style={styles.View_1864_8696} />
        <View style={styles.View_1864_8697}>
          <Text style={styles.Text_1864_8697}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_8698}>
        <View style={styles.View_1864_8699} />
        <View style={styles.View_1864_8700}>
          <Text style={styles.Text_1864_8700}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_8701}>
        <View style={styles.View_1864_8702} />
        <View style={styles.View_1864_8703}>
          <Text style={styles.Text_1864_8703}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_8704}>
        <View style={styles.View_1864_8705} />
        <View style={styles.View_1864_8706}>
          <Text style={styles.Text_1864_8706}>Buy</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ca2/237a/da569e66fe550bf529d013206d31247e"
        }}
        style={styles.ImageBackground_1864_8707}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95df/58f7/28766d87ac096f86ee1a0537ac6fbb15"
        }}
        style={styles.ImageBackground_1864_8708}
      />
      <View style={styles.View_1864_8709}>
        <Text style={styles.Text_1864_8709}>Watch Free</Text>
      </View>
      <View style={styles.View_1864_8710} />
      <View style={styles.View_1864_8711}>
        <Text style={styles.Text_1864_8711}>Myanmar Cast Montly Postpaid</Text>
      </View>
      <View style={styles.View_1864_8712} />
      <View style={styles.View_1864_8713}>
        <Text style={styles.Text_1864_8713}>Promotion</Text>
      </View>
      <View style={styles.View_1864_8714}>
        <Text style={styles.Text_1864_8714}>
          Monthly Internet + Canal Plus (Promotion)
        </Text>
      </View>
      <View style={styles.View_1864_8715}>
        <Text style={styles.Text_1864_8715}>Add-On Packages</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae95/55b3/f347839877c906dcd4db94638169f0ff"
        }}
        style={styles.ImageBackground_1864_8716}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3002/705f/b6a96154a18ac299acd5d766c46ab331"
        }}
        style={styles.ImageBackground_1864_8717}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ff7/a49f/71175f7311fe0814b08233413ae56ef7"
        }}
        style={styles.ImageBackground_1864_8718}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ff7/a49f/71175f7311fe0814b08233413ae56ef7"
        }}
        style={styles.ImageBackground_1864_8719}
      />
      <View style={styles.View_1864_8720} />
      <View style={styles.View_1864_8721}>
        <Text style={styles.Text_1864_8721}>Home</Text>
      </View>
      <View style={styles.View_1864_8722}>
        <Text style={styles.Text_1864_8722}>Packages</Text>
      </View>
      <View style={styles.View_1864_8723}>
        <Text style={styles.Text_1864_8723}>News</Text>
      </View>
      <View style={styles.View_1864_8724}>
        <Text style={styles.Text_1864_8724}>Eng</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a1c/a42f/04f3e9eaf692334d09ad09a3e97ea678"
        }}
        style={styles.ImageBackground_1864_8725}
      />
      <View style={styles.View_1864_8746}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_8747}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_8749}
      />
      <View style={styles.View_1864_8750}>
        <Text style={styles.Text_1864_8750}>Account</Text>
      </View>
      <View style={styles.View_1864_8751}>
        <Text style={styles.Text_1864_8751}>FAQs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/0c01/88539a39a3670d9f8662e790074e8512"
        }}
        style={styles.ImageBackground_1864_8752}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a00/b342/9db2f1db5671768bb85e11af0b60fa27"
        }}
        style={styles.ImageBackground_1864_8753}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd7a/e5d9/b92d7be478957fb25977fdd527e348ab"
        }}
        style={styles.ImageBackground_1864_8754}
      />
      <View style={styles.View_1864_8755}>
        <View style={styles.View_1864_8756} />
        <View style={styles.View_1864_8757} />
        <View style={styles.View_1864_8758}>
          <Text style={styles.Text_1864_8758}>
            Myanmar Net © 2021. All Rights Reserved.
          </Text>
        </View>
        <View style={styles.View_1864_8759}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
            }}
            style={styles.ImageBackground_1864_8760}
          />
          <View style={styles.View_1864_8761}>
            <Text style={styles.Text_1864_8761}>
              09-765338440 (9:00 AM to 7:30 PM Everyday)
            </Text>
          </View>
          <View style={styles.View_1864_8762}>
            <Text style={styles.Text_1864_8762}>
              No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
            }}
            style={styles.ImageBackground_1864_8763}
          />
        </View>
        <View style={styles.View_1864_8764}>
          <View style={styles.View_1864_8765}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
              }}
              style={styles.ImageBackground_1864_8766}
            />
          </View>
        </View>
        <View style={styles.View_1864_8769}>
          <View style={styles.View_1864_8770} />
          <View style={styles.View_1864_8771}>
            <View style={styles.View_1864_8772}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
                }}
                style={styles.ImageBackground_1864_8773}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_8776}>
          <View style={styles.View_1864_8777} />
          <View style={styles.View_1864_8778}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
              }}
              style={styles.ImageBackground_1864_8779}
            />
          </View>
        </View>
        <View style={styles.View_1864_8782}>
          <View style={styles.View_1864_8783} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
            }}
            style={styles.ImageBackground_1864_8784}
          />
        </View>
        <View style={styles.View_1864_8785}>
          <View style={styles.View_1864_8786}>
            <View style={styles.View_1864_8787}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff5/fbef/0efc44e786157dd9fbf5616a13085dfe"
                }}
                style={styles.ImageBackground_1864_8788}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1864_8795}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/9499/bac441cb005bd828afa02be8ddc83cad"
          }}
          style={styles.ImageBackground_1864_8796}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("154.91803278688525%") },
  View_1864_8693: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_1864_8693: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8694: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.402777777777777%"),
    top: hp("18.852459016393443%"),
    justifyContent: "flex-start"
  },
  Text_1864_8694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8695: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.59722222222222%"),
    top: hp("40.43715846994536%")
  },
  View_1864_8696: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_8697: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8094211154513893%"),
    top: hp("0.7627059853141986%"),
    justifyContent: "center"
  },
  Text_1864_8697: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8698: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.73611111111111%"),
    top: hp("132.24043715846994%")
  },
  View_1864_8699: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_8700: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8094211154513893%"),
    top: hp("0.7627059853142271%"),
    justifyContent: "center"
  },
  Text_1864_8700: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8701: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.56944444444444%"),
    top: hp("40.43715846994536%")
  },
  View_1864_8702: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_8703: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8094211154513928%"),
    top: hp("0.7627059853141986%"),
    justifyContent: "center"
  },
  Text_1864_8703: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8704: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.708333333333336%"),
    top: hp("132.24043715846994%")
  },
  View_1864_8705: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_8706: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8094211154513857%"),
    top: hp("0.7627059853142271%"),
    justifyContent: "center"
  },
  Text_1864_8706: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8707: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.730705719827956%"),
    minHeight: hp("14.730705719827956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("23.633879781420767%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_8708: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.787679161530376%"),
    minHeight: hp("14.787679161530376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.305555555555557%"),
    top: hp("23.633879781420767%"),
    resizeMode: "cover"
  },
  View_1864_8709: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: hp("71.85792349726776%"),
    justifyContent: "center"
  },
  Text_1864_8709: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8710: {
    width: wp("7.708333333333334%"),
    minWidth: wp("7.708333333333334%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("70.90163934426229%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_8711: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.402777777777777%"),
    top: hp("48.49726775956284%"),
    justifyContent: "flex-start"
  },
  Text_1864_8711: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8712: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("100.95628415300546%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_8713: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444446%"),
    top: hp("101.77595628415301%"),
    justifyContent: "center"
  },
  Text_1864_8713: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8714: {
    width: wp("20.76388888888889%"),
    minWidth: wp("20.76388888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.402777777777777%"),
    top: hp("79.50819672131148%"),
    justifyContent: "flex-start"
  },
  Text_1864_8714: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8715: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.472222222222221%"),
    top: hp("109.56284153005464%"),
    justifyContent: "flex-start"
  },
  Text_1864_8715: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8716: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.741924681950136%"),
    minHeight: hp("14.741924681950136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.402777777777777%"),
    top: hp("54.09836065573771%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_8717: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.402777777777777%"),
    top: hp("84.15300546448088%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_8718: {
    width: wp("3.856809404161241%"),
    minWidth: wp("3.856809404161241%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.31944444444444%"),
    top: hp("7.5136612021857925%")
  },
  ImageBackground_1864_8719: {
    width: wp("3.856809404161241%"),
    minWidth: wp("3.856809404161241%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.52777777777778%"),
    top: hp("7.5136612021857925%")
  },
  View_1864_8720: {
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
  View_1864_8721: {
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
  Text_1864_8721: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8722: {
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
  Text_1864_8722: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8723: {
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
  Text_1864_8723: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8724: {
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
  Text_1864_8724: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8725: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_8746: {
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
  ImageBackground_1864_8747: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8749: {
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
  View_1864_8750: {
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
  Text_1864_8750: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8751: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.388888888888886%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_1864_8751: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8752: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%")
  },
  ImageBackground_1864_8753: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    height: hp("15.009949897807804%"),
    minHeight: hp("15.009949897807804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.402777777777777%"),
    top: hp("115.1639344262295%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_8754: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    height: hp("15.009949897807804%"),
    minHeight: hp("15.009949897807804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.375%"),
    top: hp("115.1639344262295%"),
    resizeMode: "cover"
  },
  View_1864_8755: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("135.38251366120218%")
  },
  View_1864_8756: {
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
  View_1864_8757: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.617486338797818%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_8758: {
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
  Text_1864_8758: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8759: {
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
  ImageBackground_1864_8760: {
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
  View_1864_8761: {
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
  Text_1864_8761: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8762: {
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
  Text_1864_8762: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8763: {
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
  View_1864_8764: {
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
  View_1864_8765: {
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
  ImageBackground_1864_8766: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653165556693921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05635579427084281%")
  },
  View_1864_8769: {
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
  View_1864_8770: {
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
  View_1864_8771: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.2217277151639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8772: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8773: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8776: {
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
  View_1864_8777: {
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
  View_1864_8778: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8779: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8782: {
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
  View_1864_8783: {
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
  ImageBackground_1864_8784: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027146184%")
  },
  View_1864_8785: {
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
  View_1864_8786: {
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
  View_1864_8787: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.1700979764344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11277940538194287%")
  },
  ImageBackground_1864_8788: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8795: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("143.30601092896177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_8796: {
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
