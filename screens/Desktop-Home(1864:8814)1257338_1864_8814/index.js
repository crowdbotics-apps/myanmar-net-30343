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
      <View style={styles.View_1864_8823} />
      <View style={styles.View_1864_8824} />
      <View style={styles.View_1864_8825}>
        <Text style={styles.Text_1864_8825}>Loan Repayment Progress</Text>
      </View>
      <View style={styles.View_1864_8826}>
        <Text style={styles.Text_1864_8826}>Repayment Schedule</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fd8/ae90/8952ef89e725b8b7c3a5c6495af1b746"
        }}
        style={styles.ImageBackground_1864_8827}
      />
      <View style={styles.View_1864_8828}>
        <Text style={styles.Text_1864_8828}>Total late fee</Text>
      </View>
      <View style={styles.View_1864_8829}>
        <Text style={styles.Text_1864_8829}>3000</Text>
      </View>
      <View style={styles.View_1864_8830} />
      <View style={styles.View_1864_8831} />
      <View style={styles.View_1864_8832}>
        <Text style={styles.Text_1864_8832}>444 , 000</Text>
      </View>
      <View style={styles.View_1864_8833}>
        <Text style={styles.Text_1864_8833}>74,000</Text>
      </View>
      <View style={styles.View_1864_8834}>
        <Text style={styles.Text_1864_8834}>Paid</Text>
      </View>
      <View style={styles.View_1864_8835}>
        <Text style={styles.Text_1864_8835}>Total repayment amount</Text>
      </View>
      <View style={styles.View_1864_8836}>
        <Text style={styles.Text_1864_8836}>View Loan details</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfdd/8368/2ed2d720bf72e0cb340d96a814e15d64"
        }}
        style={styles.ImageBackground_1864_8837}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4133/67fa/9fd06aa3dd74e73327ffeae419bf6a44"
        }}
        style={styles.ImageBackground_1864_8838}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246a/a4df/20d7840319aa49374d868e2e708305a7"
        }}
        style={styles.ImageBackground_1864_8839}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4133/67fa/9fd06aa3dd74e73327ffeae419bf6a44"
        }}
        style={styles.ImageBackground_1864_8840}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4133/67fa/9fd06aa3dd74e73327ffeae419bf6a44"
        }}
        style={styles.ImageBackground_1864_8841}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246a/a4df/20d7840319aa49374d868e2e708305a7"
        }}
        style={styles.ImageBackground_1864_8842}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_8843}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_8844}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_8845}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_8846}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_8847}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_8848}
      />
      <View style={styles.View_1864_8849}>
        <Text style={styles.Text_1864_8849}>01-01-2021</Text>
      </View>
      <View style={styles.View_1864_8850}>
        <Text style={styles.Text_1864_8850}>01-03-2021</Text>
      </View>
      <View style={styles.View_1864_8851}>
        <Text style={styles.Text_1864_8851}>Home &gt; Loan Repayment</Text>
      </View>
      <View style={styles.View_1864_8852}>
        <Text style={styles.Text_1864_8852}>01-02-2021</Text>
      </View>
      <View style={styles.View_1864_8853}>
        <Text style={styles.Text_1864_8853}>Due Date</Text>
      </View>
      <View style={styles.View_1864_8854}>
        <Text style={styles.Text_1864_8854}>01-05-2021</Text>
      </View>
      <View style={styles.View_1864_8855}>
        <Text style={styles.Text_1864_8855}>01-04-2021</Text>
      </View>
      <View style={styles.View_1864_8856}>
        <Text style={styles.Text_1864_8856}>01-06-2021</Text>
      </View>
      <View style={styles.View_1864_8857}>
        <Text style={styles.Text_1864_8857}>74,000 </Text>
      </View>
      <View style={styles.View_1864_8858}>
        <Text style={styles.Text_1864_8858}>74,000</Text>
      </View>
      <View style={styles.View_1864_8859}>
        <Text style={styles.Text_1864_8859}>Amount</Text>
      </View>
      <View style={styles.View_1864_8860}>
        <Text style={styles.Text_1864_8860}>74,000</Text>
      </View>
      <View style={styles.View_1864_8861}>
        <Text style={styles.Text_1864_8861}>74,000</Text>
      </View>
      <View style={styles.View_1864_8862}>
        <Text style={styles.Text_1864_8862}>74,000</Text>
      </View>
      <View style={styles.View_1864_8863}>
        <Text style={styles.Text_1864_8863}>74,000</Text>
      </View>
      <View style={styles.View_1864_8864}>
        <Text style={styles.Text_1864_8864}>67,000 </Text>
      </View>
      <View style={styles.View_1864_8865}>
        <Text style={styles.Text_1864_8865}>+ 7,000</Text>
      </View>
      <View style={styles.View_1864_8866}>
        <Text style={styles.Text_1864_8866}>74,000</Text>
      </View>
      <View style={styles.View_1864_8867}>
        <Text style={styles.Text_1864_8867}>loan per month</Text>
      </View>
      <View style={styles.View_1864_8868}>
        <Text style={styles.Text_1864_8868}>Interest</Text>
      </View>
      <View style={styles.View_1864_8869}>
        <Text style={styles.Text_1864_8869}>Balance</Text>
      </View>
      <View style={styles.View_1864_8870}>
        <View style={styles.View_1864_8871} />
        <View style={styles.View_1864_8872} />
        <View style={styles.View_1864_8873}>
          <Text style={styles.Text_1864_8873}>
            Myanmar Net © 2021. All Rights Reserved.
          </Text>
        </View>
        <View style={styles.View_1864_8874}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
            }}
            style={styles.ImageBackground_1864_8875}
          />
          <View style={styles.View_1864_8876}>
            <Text style={styles.Text_1864_8876}>
              09-765338440 (9:00 AM to 7:30 PM Everyday)
            </Text>
          </View>
          <View style={styles.View_1864_8877}>
            <Text style={styles.Text_1864_8877}>
              No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
            }}
            style={styles.ImageBackground_1864_8878}
          />
        </View>
        <View style={styles.View_1864_8879}>
          <View style={styles.View_1864_8880}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
              }}
              style={styles.ImageBackground_1864_8881}
            />
          </View>
        </View>
        <View style={styles.View_1864_8884}>
          <View style={styles.View_1864_8885} />
          <View style={styles.View_1864_8886}>
            <View style={styles.View_1864_8887}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
                }}
                style={styles.ImageBackground_1864_8888}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_8891}>
          <View style={styles.View_1864_8892} />
          <View style={styles.View_1864_8893}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
              }}
              style={styles.ImageBackground_1864_8894}
            />
          </View>
        </View>
        <View style={styles.View_1864_8897}>
          <View style={styles.View_1864_8898} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
            }}
            style={styles.ImageBackground_1864_8899}
          />
        </View>
        <View style={styles.View_1864_8900}>
          <View style={styles.View_1864_8901}>
            <View style={styles.View_1864_8902}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff5/fbef/0efc44e786157dd9fbf5616a13085dfe"
                }}
                style={styles.ImageBackground_1864_8903}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1864_8910}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/9499/bac441cb005bd828afa02be8ddc83cad"
          }}
          style={styles.ImageBackground_1864_8911}
        />
      </View>
      <View style={styles.View_1864_8929} />
      <View style={styles.View_1864_8930}>
        <Text style={styles.Text_1864_8930}>Home</Text>
      </View>
      <View style={styles.View_1864_8931}>
        <Text style={styles.Text_1864_8931}>Packages</Text>
      </View>
      <View style={styles.View_1864_8932}>
        <Text style={styles.Text_1864_8932}>News</Text>
      </View>
      <View style={styles.View_1864_8933}>
        <Text style={styles.Text_1864_8933}>Account</Text>
      </View>
      <View style={styles.View_1864_8934}>
        <Text style={styles.Text_1864_8934}>FAQs</Text>
      </View>
      <View style={styles.View_1864_8935}>
        <Text style={styles.Text_1864_8935}>Eng</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405b/bced/393d0fa7a0a3d9b93e0c7dbcbcf48c4a"
        }}
        style={styles.ImageBackground_1864_8936}
      />
      <View style={styles.View_1864_8957}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_8958}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_8960}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/0c01/88539a39a3670d9f8662e790074e8512"
        }}
        style={styles.ImageBackground_1864_8961}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("154.91803278688525%") },
  View_1864_8823: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("141.66666666666669%"),
    minHeight: hp("141.66666666666669%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_1864_8824: {
    width: wp("52.5%"),
    minWidth: wp("52.5%"),
    height: hp("92.21311475409836%"),
    minHeight: hp("92.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5%"),
    top: hp("18.989071038251364%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_8825: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("21.44808743169399%"),
    justifyContent: "flex-start"
  },
  Text_1864_8825: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8826: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("51.09289617486339%"),
    justifyContent: "flex-start"
  },
  Text_1864_8826: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8827: {
    width: wp("52.5%"),
    minWidth: wp("52.5%"),
    height: hp("0.000009528534452537777%"),
    minHeight: hp("0.000009528534452537777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5%"),
    top: hp("48.36065573770492%")
  },
  View_1864_8828: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("38.79781420765027%"),
    justifyContent: "flex-start"
  },
  Text_1864_8828: {
    color: "rgba(199, 4, 4, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8829: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.41666666666667%"),
    top: hp("39.20765027322404%"),
    justifyContent: "flex-start"
  },
  Text_1864_8829: {
    color: "rgba(199, 4, 4, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8830: {
    width: wp("48.68055555555556%"),
    minWidth: wp("48.68055555555556%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("31.557377049180328%"),
    backgroundColor: "rgba(228, 228, 228, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_8831: {
    width: wp("7.916666666666666%"),
    minWidth: wp("7.916666666666666%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("31.557377049180328%"),
    backgroundColor: "rgba(54, 147, 39, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_8832: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.54166666666667%"),
    top: hp("27.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_1864_8832: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8833: {
    width: wp("3.4027777777777777%"),
    minWidth: wp("3.4027777777777777%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("27.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_1864_8833: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8834: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("34.2896174863388%"),
    justifyContent: "flex-start"
  },
  Text_1864_8834: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8835: {
    width: wp("12.083333333333334%"),
    minWidth: wp("12.083333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.04166666666667%"),
    top: hp("34.2896174863388%"),
    justifyContent: "flex-start"
  },
  Text_1864_8835: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8836: {
    width: wp("7.638888888888889%"),
    minWidth: wp("7.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("42.62295081967213%"),
    justifyContent: "flex-start"
  },
  Text_1864_8836: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8837: {
    width: wp("0.625%"),
    height: hp("0.546448087431694%"),
    top: hp("64.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.63888888888889%")
  },
  ImageBackground_1864_8838: {
    width: wp("0.3472222222222222%"),
    height: hp("1.092896174863388%"),
    top: hp("79.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.77777777777777%")
  },
  ImageBackground_1864_8839: {
    width: wp("0.3472222222222222%"),
    height: hp("0.9562841530054645%"),
    top: hp("86.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.77777777777777%")
  },
  ImageBackground_1864_8840: {
    width: wp("0.3472222222222222%"),
    height: hp("1.092896174863388%"),
    top: hp("93.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.77777777777777%")
  },
  ImageBackground_1864_8841: {
    width: wp("0.3472222222222222%"),
    height: hp("1.092896174863388%"),
    top: hp("100.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.77777777777777%")
  },
  ImageBackground_1864_8842: {
    width: wp("0.3472222222222222%"),
    height: hp("0.9562841530054645%"),
    top: hp("107.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.84722222222221%")
  },
  ImageBackground_1864_8843: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("76.775956284153%")
  },
  ImageBackground_1864_8844: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("60.92896174863388%")
  },
  ImageBackground_1864_8845: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("90.7103825136612%")
  },
  ImageBackground_1864_8846: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("104.37158469945356%")
  },
  ImageBackground_1864_8847: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("83.7431693989071%")
  },
  ImageBackground_1864_8848: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("97.54098360655738%")
  },
  View_1864_8849: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("63.387978142076506%"),
    justifyContent: "flex-start"
  },
  Text_1864_8849: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8850: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("86.20218579234972%"),
    justifyContent: "flex-start"
  },
  Text_1864_8850: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8851: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_1864_8851: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8852: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("79.37158469945356%"),
    justifyContent: "flex-start"
  },
  Text_1864_8852: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8853: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("56.557377049180324%"),
    justifyContent: "flex-start"
  },
  Text_1864_8853: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8854: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("100%"),
    justifyContent: "flex-start"
  },
  Text_1864_8854: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8855: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("93.16939890710383%"),
    justifyContent: "flex-start"
  },
  Text_1864_8855: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8856: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("106.83060109289617%"),
    justifyContent: "flex-start"
  },
  Text_1864_8856: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8857: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.30555555555556%"),
    top: hp("63.387978142076506%"),
    justifyContent: "flex-start"
  },
  Text_1864_8857: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8858: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.30555555555556%"),
    top: hp("79.23497267759562%"),
    justifyContent: "flex-start"
  },
  Text_1864_8858: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8859: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.65277777777777%"),
    top: hp("56.4207650273224%"),
    justifyContent: "flex-start"
  },
  Text_1864_8859: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8860: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.30555555555556%"),
    top: hp("86.0655737704918%"),
    justifyContent: "flex-start"
  },
  Text_1864_8860: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8861: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.30555555555556%"),
    top: hp("92.75956284153006%"),
    justifyContent: "flex-start"
  },
  Text_1864_8861: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8862: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.30555555555556%"),
    top: hp("99.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_1864_8862: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8863: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.30555555555556%"),
    top: hp("106.55737704918033%"),
    justifyContent: "flex-start"
  },
  Text_1864_8863: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8864: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.30555555555556%"),
    top: hp("66.39344262295081%"),
    justifyContent: "flex-start"
  },
  Text_1864_8864: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8865: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.30555555555556%"),
    top: hp("69.53551912568307%"),
    justifyContent: "flex-start"
  },
  Text_1864_8865: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8866: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.30555555555556%"),
    top: hp("72.54098360655738%"),
    justifyContent: "flex-start"
  },
  Text_1864_8866: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8867: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("66.39344262295081%"),
    justifyContent: "flex-start"
  },
  Text_1864_8867: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8868: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("69.53551912568307%"),
    justifyContent: "flex-start"
  },
  Text_1864_8868: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8869: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("72.54098360655738%"),
    justifyContent: "flex-start"
  },
  Text_1864_8869: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8870: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("135.24590163934425%")
  },
  View_1864_8871: {
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
  View_1864_8872: {
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
  View_1864_8873: {
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
  Text_1864_8873: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8874: {
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
  ImageBackground_1864_8875: {
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
  View_1864_8876: {
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
  Text_1864_8876: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8877: {
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
  Text_1864_8877: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8878: {
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
  View_1864_8879: {
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
  View_1864_8880: {
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
  ImageBackground_1864_8881: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653165556693921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05635579427084281%")
  },
  View_1864_8884: {
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
  View_1864_8885: {
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
  View_1864_8886: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.2217277151639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8887: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8888: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8891: {
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
  View_1864_8892: {
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
  View_1864_8893: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8894: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8897: {
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
  View_1864_8898: {
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
  ImageBackground_1864_8899: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027146184%")
  },
  View_1864_8900: {
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
  View_1864_8901: {
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
  View_1864_8902: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.17009797643444813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11277940538194287%")
  },
  ImageBackground_1864_8903: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8910: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("143.16939890710384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_8911: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8929: {
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
  View_1864_8930: {
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
  Text_1864_8930: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8931: {
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
  Text_1864_8931: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8932: {
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
  Text_1864_8932: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8933: {
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
  Text_1864_8933: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8934: {
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
  Text_1864_8934: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8935: {
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
  Text_1864_8935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8936: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_8957: {
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
  ImageBackground_1864_8958: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8960: {
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
  ImageBackground_1864_8961: {
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
