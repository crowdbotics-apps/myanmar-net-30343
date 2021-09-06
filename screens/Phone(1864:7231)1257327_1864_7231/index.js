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
      <View style={styles.View_1864_7232} />
      <View style={styles.View_1864_7233}>
        <Text style={styles.Text_1864_7233}>CPE Setting</Text>
      </View>
      <View style={styles.View_1864_7234}>
        <Text style={styles.Text_1864_7234}>Account ID:</Text>
      </View>
      <View style={styles.View_1864_7235}>
        <Text style={styles.Text_1864_7235}>Level:</Text>
      </View>
      <View style={styles.View_1864_7236}>
        <Text style={styles.Text_1864_7236}>423665935</Text>
      </View>
      <View style={styles.View_1864_7237}>
        <View style={styles.View_1864_7238}>
          <View style={styles.View_1864_7239} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fe7/379a/b432970e8b7f1b211afca9ea4a2a599d"
            }}
            style={styles.ImageBackground_1864_7240}
          />
        </View>
        <View style={styles.View_1864_7241}>
          <Text style={styles.Text_1864_7241}>Registered user</Text>
        </View>
      </View>
      <View style={styles.View_1864_7242} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_7243}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a0/6689/02fc154db7272f3035351e6858c578fd"
        }}
        style={styles.ImageBackground_1864_7247}
      />
      <View style={styles.View_1864_7268}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_7269}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_7271}
      />
      <View style={styles.View_1864_7272}>
        <View style={styles.View_1864_7273} />
        <View style={styles.View_1864_7274}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5345/6e93/13df8dfc4c0b426c51b83472e8c6402e"
            }}
            style={styles.ImageBackground_1864_7275}
          />
          <View style={styles.View_1864_7276}>
            <Text style={styles.Text_1864_7276}>
              09-765338440 (9:00 AM to 7:30 PM Everyday)
            </Text>
          </View>
        </View>
        <View style={styles.View_1864_7277}>
          <Text style={styles.Text_1864_7277}>
            No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d86a/1c07/7e759385bba8fb770347632d4c30bca9"
          }}
          style={styles.ImageBackground_1864_7278}
        />
        <View style={styles.View_1864_7279} />
        <View style={styles.View_1864_7280}>
          <Text style={styles.Text_1864_7280}>
            Myanmar Net © 2018. All Rights Reserved.
          </Text>
        </View>
        <View style={styles.View_1864_7281}>
          <View style={styles.View_1864_7282}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
              }}
              style={styles.ImageBackground_1864_7283}
            />
          </View>
        </View>
        <View style={styles.View_1864_7286}>
          <View style={styles.View_1864_7287} />
          <View style={styles.View_1864_7288}>
            <View style={styles.View_1864_7289}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
                }}
                style={styles.ImageBackground_1864_7290}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_7293}>
          <View style={styles.View_1864_7294} />
          <View style={styles.View_1864_7295}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
              }}
              style={styles.ImageBackground_1864_7296}
            />
          </View>
        </View>
        <View style={styles.View_1864_7299}>
          <View style={styles.View_1864_7300} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
            }}
            style={styles.ImageBackground_1864_7301}
          />
        </View>
        <View style={styles.View_1864_7302}>
          <View style={styles.View_1864_7303}>
            <View style={styles.View_1864_7304}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5e/d9d8/024bda31280007aade1c47def89a7c99"
                }}
                style={styles.ImageBackground_1864_7305}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_7312}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
            }}
            style={styles.ImageBackground_1864_7313}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_7331}
      />
      <View style={styles.View_1864_7332} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/502f/c3fe/065c9898118372d23388b96342a69a3f"
        }}
        style={styles.ImageBackground_1864_7333}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ede/fefd/65c3b0d7ac575a076bebfe7ecb7fc1f5"
        }}
        style={styles.ImageBackground_1864_7334}
      />
      <View style={styles.View_1864_7335}>
        <Text style={styles.Text_1864_7335}>Network:</Text>
      </View>
      <View style={styles.View_1864_7336}>
        <Text style={styles.Text_1864_7336}>CPE ID :</Text>
      </View>
      <View style={styles.View_1864_7337}>
        <Text style={styles.Text_1864_7337}>Current Active Plan:</Text>
      </View>
      <View style={styles.View_1864_7338}>
        <Text style={styles.Text_1864_7338}>CG123456</Text>
      </View>
      <View style={styles.View_1864_7339}>
        <Text style={styles.Text_1864_7339}>VF7BC</Text>
      </View>
      <View style={styles.View_1864_7340}>
        <View style={styles.View_1864_7341}>
          <Text style={styles.Text_1864_7341}>10 Mbps</Text>
        </View>
      </View>
      <View style={styles.View_1864_7342}>
        <View style={styles.View_1864_7343}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf14/b9ca/73d92a1e858e3a86d43bfc229ffd1789"
            }}
            style={styles.ImageBackground_1864_7344}
          />
        </View>
      </View>
      <View style={styles.View_1864_7347} />
      <View style={styles.View_1864_7348}>
        <Text style={styles.Text_1864_7348}>Change wifi password</Text>
      </View>
      <View style={styles.View_1864_7349} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/502f/c3fe/065c9898118372d23388b96342a69a3f"
        }}
        style={styles.ImageBackground_1864_7350}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ede/fefd/65c3b0d7ac575a076bebfe7ecb7fc1f5"
        }}
        style={styles.ImageBackground_1864_7351}
      />
      <View style={styles.View_1864_7352}>
        <Text style={styles.Text_1864_7352}>Network:</Text>
      </View>
      <View style={styles.View_1864_7353}>
        <Text style={styles.Text_1864_7353}>CPE ID :</Text>
      </View>
      <View style={styles.View_1864_7354}>
        <Text style={styles.Text_1864_7354}>Current Active Plan:</Text>
      </View>
      <View style={styles.View_1864_7355}>
        <Text style={styles.Text_1864_7355}>CG234433</Text>
      </View>
      <View style={styles.View_1864_7356}>
        <Text style={styles.Text_1864_7356}>VF7BC</Text>
      </View>
      <View style={styles.View_1864_7357}>
        <View style={styles.View_1864_7358}>
          <Text style={styles.Text_1864_7358}>10 Mbps</Text>
        </View>
      </View>
      <View style={styles.View_1864_7359}>
        <View style={styles.View_1864_7360}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf14/b9ca/73d92a1e858e3a86d43bfc229ffd1789"
            }}
            style={styles.ImageBackground_1864_7361}
          />
        </View>
      </View>
      <View style={styles.View_1864_7364} />
      <View style={styles.View_1864_7365}>
        <Text style={styles.Text_1864_7365}>Change wifi password</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1864_7232: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(241, 250, 255, 1)"
  },
  View_1864_7233: {
    width: wp("23.18840579710145%"),
    minWidth: wp("23.18840579710145%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("24.863387978142075%"),
    justifyContent: "flex-start"
  },
  Text_1864_7233: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7234: {
    width: wp("20.048309178743963%"),
    minWidth: wp("20.048309178743963%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("12.568306010928962%"),
    justifyContent: "flex-start"
  },
  Text_1864_7234: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7235: {
    width: wp("10.144927536231885%"),
    minWidth: wp("10.144927536231885%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("17.21311475409836%"),
    justifyContent: "flex-start"
  },
  Text_1864_7235: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7236: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.053140096618357%"),
    top: hp("12.568306010928962%"),
    justifyContent: "flex-start"
  },
  Text_1864_7236: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7237: {
    width: wp("41.06280193236715%"),
    minWidth: wp("41.06280193236715%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.425120772946862%"),
    top: hp("16.530054644808743%")
  },
  View_1864_7238: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.57487922705314%"),
    top: hp("0%")
  },
  View_1864_7239: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_1864_7240: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("1.366120218579237%")
  },
  View_1864_7241: {
    width: wp("27.294685990338163%"),
    minWidth: wp("27.294685990338163%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896167%"),
    justifyContent: "flex-start"
  },
  Text_1864_7241: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7242: {
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
  ImageBackground_1864_7243: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("4.2349726775956285%")
  },
  ImageBackground_1864_7247: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_7268: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.06280193236715%"),
    top: hp("4.508196721311475%")
  },
  ImageBackground_1864_7269: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_7271: {
    width: wp("1.2077294685990339%"),
    minWidth: wp("1.2077294685990339%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.92753623188406%"),
    top: hp("4.098360655737705%")
  },
  View_1864_7272: {
    width: wp("100.2415458937198%"),
    minWidth: wp("100.2415458937198%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90.43715846994536%")
  },
  View_1864_7273: {
    width: wp("100.2415458937198%"),
    minWidth: wp("100.2415458937198%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(54, 54, 54, 1)"
  },
  View_1864_7274: {
    width: wp("77.23926046620244%"),
    minWidth: wp("77.23926046620244%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.851788949275361%"),
    top: hp("4.78142076502732%")
  },
  ImageBackground_1864_7275: {
    width: wp("3.6319400953209917%"),
    minWidth: wp("3.6319400953209917%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1864_7276: {
    width: wp("70.21750482384134%"),
    minWidth: wp("70.21750482384134%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.021814613526571%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_7276: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7277: {
    width: wp("82.56610372792119%"),
    minWidth: wp("82.56610372792119%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.819859601449277%"),
    top: hp("9.016393442622942%"),
    justifyContent: "flex-start"
  },
  Text_1864_7277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_7278: {
    width: wp("4.842586793761323%"),
    minWidth: wp("4.842586793761323%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("8.879781420765028%"),
    resizeMode: "cover"
  },
  View_1864_7279: {
    width: wp("100.2415458937198%"),
    minWidth: wp("100.2415458937198%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.04918032786884%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_7280: {
    width: wp("54.96335974062122%"),
    minWidth: wp("54.96335974062122%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.76003925120773%"),
    top: hp("28.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_1864_7280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7281: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661837%"),
    top: hp("19.12568306010928%")
  },
  View_1864_7282: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
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
  ImageBackground_1864_7283: {
    width: wp("5.50835973398697%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6654499658469888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19578426932367066%")
  },
  View_1864_7286: {
    width: wp("5.882024995370763%"),
    minWidth: wp("5.882024995370763%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.748792270531396%"),
    top: hp("19.26229508196721%")
  },
  View_1864_7287: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_7288: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0.22172771516393652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_7289: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_7290: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_7293: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.1214145531401%"),
    top: hp("19.26229508196721%")
  },
  View_1864_7294: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_7295: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_7296: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_7299: {
    width: wp("5.882058627363564%"),
    minWidth: wp("5.882058627363564%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("19.26229508196721%")
  },
  View_1864_7300: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1864_7301: {
    width: wp("5.881911660162147%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_7302: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94685990338165%"),
    top: hp("19.26229508196721%")
  },
  View_1864_7303: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
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
  View_1864_7304: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.17023138661201642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3920403079710013%")
  },
  ImageBackground_1864_7305: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_7312: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("20.628415300546436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.6086956521739%")
  },
  ImageBackground_1864_7313: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_7331: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.09661835748793%"),
    top: hp("12.431693989071038%"),
    resizeMode: "cover"
  },
  View_1864_7332: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("30.46448087431694%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_7333: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("32.92349726775956%")
  },
  ImageBackground_1864_7334: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("34.56284153005464%"),
    resizeMode: "cover"
  },
  View_1864_7335: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26086956521739%"),
    top: hp("37.02185792349727%"),
    justifyContent: "flex-start"
  },
  Text_1864_7335: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7336: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26086956521739%"),
    top: hp("32.92349726775956%"),
    justifyContent: "flex-start"
  },
  Text_1864_7336: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7337: {
    width: wp("29.71014492753623%"),
    minWidth: wp("29.71014492753623%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26086956521739%"),
    top: hp("40.98360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1864_7337: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7338: {
    width: wp("16.183574879227052%"),
    minWidth: wp("16.183574879227052%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.270531400966185%"),
    top: hp("32.92349726775956%"),
    justifyContent: "flex-start"
  },
  Text_1864_7338: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7339: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%"),
    top: hp("37.02185792349727%"),
    justifyContent: "flex-start"
  },
  Text_1864_7339: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7340: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("40.98360655737705%")
  },
  View_1864_7341: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_7341: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7342: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.212560386473434%"),
    top: hp("36.74863387978142%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_7343: {
    width: wp("4.820415939109913%"),
    height: hp("2.738180316862513%"),
    top: hp("-0.006003457991802463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_7344: {
    width: wp("4.820415939109913%"),
    height: hp("2.738180316862513%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_7347: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26086956521739%"),
    top: hp("45.76502732240437%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_7348: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%"),
    top: hp("46.72131147540984%"),
    justifyContent: "center"
  },
  Text_1864_7348: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7349: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("54.37158469945356%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_7350: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("56.830601092896174%")
  },
  ImageBackground_1864_7351: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("58.46994535519126%"),
    resizeMode: "cover"
  },
  View_1864_7352: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26086956521739%"),
    top: hp("60.92896174863388%"),
    justifyContent: "flex-start"
  },
  Text_1864_7352: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7353: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26086956521739%"),
    top: hp("56.830601092896174%"),
    justifyContent: "flex-start"
  },
  Text_1864_7353: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7354: {
    width: wp("29.71014492753623%"),
    minWidth: wp("29.71014492753623%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26086956521739%"),
    top: hp("64.89071038251366%"),
    justifyContent: "flex-start"
  },
  Text_1864_7354: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7355: {
    width: wp("16.183574879227052%"),
    minWidth: wp("16.183574879227052%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.270531400966185%"),
    top: hp("56.830601092896174%"),
    justifyContent: "flex-start"
  },
  Text_1864_7355: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7356: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%"),
    top: hp("60.92896174863388%"),
    justifyContent: "flex-start"
  },
  Text_1864_7356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7357: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("64.89071038251366%")
  },
  View_1864_7358: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_7358: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7359: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.212560386473434%"),
    top: hp("60.65573770491803%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_7360: {
    width: wp("4.820415939109913%"),
    height: hp("2.738180316862513%"),
    top: hp("-0.006003457991795358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_7361: {
    width: wp("4.820415939109913%"),
    height: hp("2.738180316862513%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_7364: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26086956521739%"),
    top: hp("69.67213114754098%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_7365: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%"),
    top: hp("70.62841530054644%"),
    justifyContent: "center"
  },
  Text_1864_7365: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
