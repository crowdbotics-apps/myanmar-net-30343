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
      <View style={styles.View_1864_9337} />
      <View style={styles.View_1864_9338} />
      <View style={styles.View_1864_9339}>
        <Text style={styles.Text_1864_9339}>Loan Repayment Progress</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fd8/ae90/8952ef89e725b8b7c3a5c6495af1b746"
        }}
        style={styles.ImageBackground_1864_9340}
      />
      <View style={styles.View_1864_9341}>
        <Text style={styles.Text_1864_9341}>Total late fee</Text>
      </View>
      <View style={styles.View_1864_9342}>
        <Text style={styles.Text_1864_9342}>3000</Text>
      </View>
      <View style={styles.View_1864_9343} />
      <View style={styles.View_1864_9344} />
      <View style={styles.View_1864_9345}>
        <Text style={styles.Text_1864_9345}>444 , 000</Text>
      </View>
      <View style={styles.View_1864_9346}>
        <Text style={styles.Text_1864_9346}>74,000</Text>
      </View>
      <View style={styles.View_1864_9347}>
        <Text style={styles.Text_1864_9347}>Paid</Text>
      </View>
      <View style={styles.View_1864_9348}>
        <Text style={styles.Text_1864_9348}>Total repayment amount</Text>
      </View>
      <View style={styles.View_1864_9349}>
        <Text style={styles.Text_1864_9349}>View Loan details</Text>
      </View>
      <View style={styles.View_1864_9350}>
        <View style={styles.View_1864_9351} />
        <View style={styles.View_1864_9352} />
        <View style={styles.View_1864_9353}>
          <Text style={styles.Text_1864_9353}>
            Myanmar Net © 2021. All Rights Reserved.
          </Text>
        </View>
        <View style={styles.View_1864_9354}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
            }}
            style={styles.ImageBackground_1864_9355}
          />
          <View style={styles.View_1864_9356}>
            <Text style={styles.Text_1864_9356}>
              09-765338440 (9:00 AM to 7:30 PM Everyday)
            </Text>
          </View>
          <View style={styles.View_1864_9357}>
            <Text style={styles.Text_1864_9357}>
              No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
            }}
            style={styles.ImageBackground_1864_9358}
          />
        </View>
        <View style={styles.View_1864_9359}>
          <View style={styles.View_1864_9360}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
              }}
              style={styles.ImageBackground_1864_9361}
            />
          </View>
        </View>
        <View style={styles.View_1864_9364}>
          <View style={styles.View_1864_9365} />
          <View style={styles.View_1864_9366}>
            <View style={styles.View_1864_9367}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
                }}
                style={styles.ImageBackground_1864_9368}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_9371}>
          <View style={styles.View_1864_9372} />
          <View style={styles.View_1864_9373}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
              }}
              style={styles.ImageBackground_1864_9374}
            />
          </View>
        </View>
        <View style={styles.View_1864_9377}>
          <View style={styles.View_1864_9378} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
            }}
            style={styles.ImageBackground_1864_9379}
          />
        </View>
        <View style={styles.View_1864_9380}>
          <View style={styles.View_1864_9381}>
            <View style={styles.View_1864_9382}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff5/fbef/0efc44e786157dd9fbf5616a13085dfe"
                }}
                style={styles.ImageBackground_1864_9383}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1864_9390}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_9391}
        />
      </View>
      <View style={styles.View_1864_9409}>
        <Text style={styles.Text_1864_9409}>Repayment Schedule</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfdd/8368/2ed2d720bf72e0cb340d96a814e15d64"
        }}
        style={styles.ImageBackground_1864_9410}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4133/67fa/9fd06aa3dd74e73327ffeae419bf6a44"
        }}
        style={styles.ImageBackground_1864_9411}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246a/a4df/20d7840319aa49374d868e2e708305a7"
        }}
        style={styles.ImageBackground_1864_9412}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4133/67fa/9fd06aa3dd74e73327ffeae419bf6a44"
        }}
        style={styles.ImageBackground_1864_9413}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4133/67fa/9fd06aa3dd74e73327ffeae419bf6a44"
        }}
        style={styles.ImageBackground_1864_9414}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246a/a4df/20d7840319aa49374d868e2e708305a7"
        }}
        style={styles.ImageBackground_1864_9415}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_9416}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_9417}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_9418}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_9419}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_9420}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/7e86/2668e7e87dda501f70874e460d09385b"
        }}
        style={styles.ImageBackground_1864_9421}
      />
      <View style={styles.View_1864_9422}>
        <Text style={styles.Text_1864_9422}>01-01-2021</Text>
      </View>
      <View style={styles.View_1864_9423}>
        <Text style={styles.Text_1864_9423}>01-03-2021</Text>
      </View>
      <View style={styles.View_1864_9424}>
        <Text style={styles.Text_1864_9424}>01-02-2021</Text>
      </View>
      <View style={styles.View_1864_9425}>
        <Text style={styles.Text_1864_9425}>Due Date</Text>
      </View>
      <View style={styles.View_1864_9426}>
        <Text style={styles.Text_1864_9426}>01-05-2021</Text>
      </View>
      <View style={styles.View_1864_9427}>
        <Text style={styles.Text_1864_9427}>01-04-2021</Text>
      </View>
      <View style={styles.View_1864_9428}>
        <Text style={styles.Text_1864_9428}>01-06-2021</Text>
      </View>
      <View style={styles.View_1864_9429}>
        <Text style={styles.Text_1864_9429}>74,000 </Text>
      </View>
      <View style={styles.View_1864_9430}>
        <Text style={styles.Text_1864_9430}>74,000</Text>
      </View>
      <View style={styles.View_1864_9431}>
        <Text style={styles.Text_1864_9431}>Amount</Text>
      </View>
      <View style={styles.View_1864_9432}>
        <Text style={styles.Text_1864_9432}>74,000</Text>
      </View>
      <View style={styles.View_1864_9433}>
        <Text style={styles.Text_1864_9433}>74,000</Text>
      </View>
      <View style={styles.View_1864_9434}>
        <Text style={styles.Text_1864_9434}>74,000</Text>
      </View>
      <View style={styles.View_1864_9435}>
        <Text style={styles.Text_1864_9435}>74,000</Text>
      </View>
      <View style={styles.View_1864_9436}>
        <Text style={styles.Text_1864_9436}>67,000 </Text>
      </View>
      <View style={styles.View_1864_9437}>
        <Text style={styles.Text_1864_9437}>+ 7,000</Text>
      </View>
      <View style={styles.View_1864_9438}>
        <Text style={styles.Text_1864_9438}>74,000</Text>
      </View>
      <View style={styles.View_1864_9439}>
        <Text style={styles.Text_1864_9439}>loan per month</Text>
      </View>
      <View style={styles.View_1864_9440}>
        <Text style={styles.Text_1864_9440}>Interest</Text>
      </View>
      <View style={styles.View_1864_9441}>
        <Text style={styles.Text_1864_9441}>Balance</Text>
      </View>
      <View style={styles.View_1864_9442}>
        <Text style={styles.Text_1864_9442}>Home &gt; Loan Repayment</Text>
      </View>
      <View style={styles.View_1864_9443} />
      <View style={styles.View_1864_9444}>
        <Text style={styles.Text_1864_9444}>Home</Text>
      </View>
      <View style={styles.View_1864_9445}>
        <Text style={styles.Text_1864_9445}>Packages</Text>
      </View>
      <View style={styles.View_1864_9446}>
        <Text style={styles.Text_1864_9446}>News</Text>
      </View>
      <View style={styles.View_1864_9447}>
        <Text style={styles.Text_1864_9447}>Account</Text>
      </View>
      <View style={styles.View_1864_9448}>
        <Text style={styles.Text_1864_9448}>FAQs</Text>
      </View>
      <View style={styles.View_1864_9449}>
        <Text style={styles.Text_1864_9449}>Eng</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405b/bced/393d0fa7a0a3d9b93e0c7dbcbcf48c4a"
        }}
        style={styles.ImageBackground_1864_9450}
      />
      <View style={styles.View_1864_9471}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_9472}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_9474}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/0c01/88539a39a3670d9f8662e790074e8512"
        }}
        style={styles.ImageBackground_1864_9475}
      />
      <View style={styles.View_1864_9476} />
      <View style={styles.View_1864_9477}>
        <View style={styles.View_1864_9478} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/851d/e1d1/789c91d9909cf905eb16e04a85793f37"
          }}
          style={styles.ImageBackground_1864_9479}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/851d/e1d1/789c91d9909cf905eb16e04a85793f37"
          }}
          style={styles.ImageBackground_1864_9480}
        />
        <View style={styles.View_1864_9481}>
          <Text style={styles.Text_1864_9481}>Loan Details</Text>
        </View>
        <View style={styles.View_1864_9482}>
          <View style={styles.View_1864_9483} />
          <View style={styles.View_1864_9484}>
            <Text style={styles.Text_1864_9484}>Close</Text>
          </View>
        </View>
        <View style={styles.View_1864_9485}>
          <Text style={styles.Text_1864_9485}>Loan term</Text>
        </View>
        <View style={styles.View_1864_9486}>
          <Text style={styles.Text_1864_9486}>Interest rate</Text>
        </View>
        <View style={styles.View_1864_9487}>
          <Text style={styles.Text_1864_9487}>Monthly repayment</Text>
        </View>
        <View style={styles.View_1864_9488}>
          <Text style={styles.Text_1864_9488}>6 months</Text>
        </View>
        <View style={styles.View_1864_9489}>
          <Text style={styles.Text_1864_9489}>5%</Text>
        </View>
        <View style={styles.View_1864_9490}>
          <Text style={styles.Text_1864_9490}>74,000 Ks</Text>
        </View>
        <View style={styles.View_1864_9491}>
          <Text style={styles.Text_1864_9491}>Your applied loan</Text>
        </View>
        <View style={styles.View_1864_9492}>
          <Text style={styles.Text_1864_9492}>400,000 Ks</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("171.448087431694%") },
  View_1864_9337: {
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
  View_1864_9338: {
    width: wp("52.5%"),
    minWidth: wp("52.5%"),
    height: hp("92.21311475409836%"),
    minHeight: hp("92.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.63888888888889%"),
    top: hp("19.53551912568306%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_9339: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("21.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_1864_9339: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_9340: {
    width: wp("52.5%"),
    minWidth: wp("52.5%"),
    height: hp("0.000009528534452537777%"),
    minHeight: hp("0.000009528534452537777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.63888888888889%"),
    top: hp("48.90710382513661%")
  },
  View_1864_9341: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("39.34426229508197%"),
    justifyContent: "flex-start"
  },
  Text_1864_9341: {
    color: "rgba(199, 4, 4, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9342: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.55555555555556%"),
    top: hp("39.75409836065574%"),
    justifyContent: "flex-start"
  },
  Text_1864_9342: {
    color: "rgba(199, 4, 4, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9343: {
    width: wp("48.68055555555556%"),
    minWidth: wp("48.68055555555556%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("32.10382513661202%"),
    backgroundColor: "rgba(228, 228, 228, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_9344: {
    width: wp("7.916666666666666%"),
    minWidth: wp("7.916666666666666%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("32.10382513661202%"),
    backgroundColor: "rgba(54, 147, 39, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_9345: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.68055555555556%"),
    top: hp("27.86885245901639%"),
    justifyContent: "flex-start"
  },
  Text_1864_9345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9346: {
    width: wp("3.4027777777777777%"),
    minWidth: wp("3.4027777777777777%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("27.86885245901639%"),
    justifyContent: "flex-start"
  },
  Text_1864_9346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9347: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("34.83606557377049%"),
    justifyContent: "flex-start"
  },
  Text_1864_9347: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9348: {
    width: wp("12.083333333333334%"),
    minWidth: wp("12.083333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.18055555555556%"),
    top: hp("34.83606557377049%"),
    justifyContent: "flex-start"
  },
  Text_1864_9348: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9349: {
    width: wp("7.638888888888889%"),
    minWidth: wp("7.638888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("43.169398907103826%"),
    justifyContent: "flex-start"
  },
  Text_1864_9349: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9350: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("151.9125683060109%")
  },
  View_1864_9351: {
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
  View_1864_9352: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.617486338797846%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_9353: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.15277777777778%"),
    top: hp("16.120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_9353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9354: {
    width: wp("29.097222222222225%"),
    minWidth: wp("29.097222222222225%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.694444444444445%"),
    top: hp("4.098360655737736%")
  },
  ImageBackground_1864_9355: {
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
  View_1864_9356: {
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
  Text_1864_9356: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9357: {
    width: wp("26.944444444444443%"),
    minWidth: wp("26.944444444444443%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.152777777777777%"),
    top: hp("4.234972677595607%"),
    justifyContent: "flex-start"
  },
  Text_1864_9357: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_9358: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737679%"),
    resizeMode: "cover"
  },
  View_1864_9359: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.76388888888889%"),
    top: hp("5.567073300888012%")
  },
  View_1864_9360: {
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
  ImageBackground_1864_9361: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653165556693921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.056321885850692865%")
  },
  View_1864_9364: {
    width: wp("1.6910821861690943%"),
    minWidth: wp("1.6910821861690943%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28564453125%"),
    top: hp("5.567073300888012%")
  },
  View_1864_9365: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00003390842013573092%"),
    top: hp("0%")
  },
  View_1864_9366: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.2217277151639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9367: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9368: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9371: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.80712890625%"),
    top: hp("5.567073300888012%")
  },
  View_1864_9372: {
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
  View_1864_9373: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9374: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9377: {
    width: wp("1.6910918553670249%"),
    minWidth: wp("1.6910918553670249%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.32874891493056%"),
    top: hp("5.567073300888012%")
  },
  View_1864_9378: {
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
  ImageBackground_1864_9379: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00003390842013573092%")
  },
  View_1864_9380: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.85064019097223%"),
    top: hp("5.567073300888012%")
  },
  View_1864_9381: {
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
  View_1864_9382: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.17009797643439128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11274549696179292%")
  },
  ImageBackground_1864_9383: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9390: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("159.8360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_9391: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9409: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("51.63934426229508%"),
    justifyContent: "flex-start"
  },
  Text_1864_9409: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_9410: {
    width: wp("0.625%"),
    height: hp("0.546448087431694%"),
    top: hp("64.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.77777777777777%")
  },
  ImageBackground_1864_9411: {
    width: wp("0.3472222222222222%"),
    height: hp("1.092896174863388%"),
    top: hp("80.46448087431693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.91666666666666%")
  },
  ImageBackground_1864_9412: {
    width: wp("0.3472222222222222%"),
    height: hp("0.9562841530054645%"),
    top: hp("87.29508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.91666666666666%")
  },
  ImageBackground_1864_9413: {
    width: wp("0.3472222222222222%"),
    height: hp("1.092896174863388%"),
    top: hp("94.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.91666666666666%")
  },
  ImageBackground_1864_9414: {
    width: wp("0.3472222222222222%"),
    height: hp("1.092896174863388%"),
    top: hp("100.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.91666666666666%")
  },
  ImageBackground_1864_9415: {
    width: wp("0.3472222222222222%"),
    height: hp("0.9562841530054645%"),
    top: hp("107.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.98611111111111%")
  },
  ImageBackground_1864_9416: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("77.3224043715847%")
  },
  ImageBackground_1864_9417: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("61.47540983606557%")
  },
  ImageBackground_1864_9418: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("91.2568306010929%")
  },
  ImageBackground_1864_9419: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("104.91803278688525%")
  },
  ImageBackground_1864_9420: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("84.2896174863388%")
  },
  ImageBackground_1864_9421: {
    width: wp("48.81944444444444%"),
    minWidth: wp("48.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("98.08743169398907%")
  },
  View_1864_9422: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("63.934426229508205%"),
    justifyContent: "flex-start"
  },
  Text_1864_9422: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9423: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("86.74863387978142%"),
    justifyContent: "flex-start"
  },
  Text_1864_9423: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9424: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("79.91803278688525%"),
    justifyContent: "flex-start"
  },
  Text_1864_9424: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9425: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("57.103825136612016%"),
    justifyContent: "flex-start"
  },
  Text_1864_9425: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9426: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("100.5464480874317%"),
    justifyContent: "flex-start"
  },
  Text_1864_9426: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9427: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("93.71584699453553%"),
    justifyContent: "flex-start"
  },
  Text_1864_9427: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9428: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("107.37704918032787%"),
    justifyContent: "flex-start"
  },
  Text_1864_9428: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9429: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("63.934426229508205%"),
    justifyContent: "flex-start"
  },
  Text_1864_9429: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9430: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("79.78142076502732%"),
    justifyContent: "flex-start"
  },
  Text_1864_9430: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9431: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.79166666666666%"),
    top: hp("56.9672131147541%"),
    justifyContent: "flex-start"
  },
  Text_1864_9431: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9432: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("86.6120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_9432: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9433: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("93.30601092896174%"),
    justifyContent: "flex-start"
  },
  Text_1864_9433: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9434: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("100.13661202185793%"),
    justifyContent: "flex-start"
  },
  Text_1864_9434: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9435: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("107.10382513661203%"),
    justifyContent: "flex-start"
  },
  Text_1864_9435: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9436: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.44444444444444%"),
    top: hp("66.93989071038251%"),
    justifyContent: "flex-start"
  },
  Text_1864_9436: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9437: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.44444444444444%"),
    top: hp("70.08196721311475%"),
    justifyContent: "flex-start"
  },
  Text_1864_9437: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9438: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.44444444444444%"),
    top: hp("73.08743169398907%"),
    justifyContent: "flex-start"
  },
  Text_1864_9438: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9439: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("66.93989071038251%"),
    justifyContent: "flex-start"
  },
  Text_1864_9439: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9440: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("70.08196721311475%"),
    justifyContent: "flex-start"
  },
  Text_1864_9440: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9441: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("73.08743169398907%"),
    justifyContent: "flex-start"
  },
  Text_1864_9441: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9442: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("13.524590163934427%"),
    justifyContent: "flex-start"
  },
  Text_1864_9442: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9443: {
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
  View_1864_9444: {
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
  Text_1864_9444: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9445: {
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
  Text_1864_9445: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9446: {
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
  Text_1864_9446: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9447: {
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
  Text_1864_9447: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9448: {
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
  Text_1864_9448: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9449: {
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
  Text_1864_9449: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_9450: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_9471: {
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
  ImageBackground_1864_9472: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9474: {
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
  ImageBackground_1864_9475: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%")
  },
  View_1864_9476: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("171.448087431694%"),
    minHeight: hp("171.448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1864_9477: {
    width: wp("25.555555555555554%"),
    minWidth: wp("25.555555555555554%"),
    height: hp("35.10928961748634%"),
    minHeight: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.291666666666664%"),
    top: hp("39.34426229508197%")
  },
  View_1864_9478: {
    width: wp("25.555555555555554%"),
    minWidth: wp("25.555555555555554%"),
    height: hp("35.10928961748634%"),
    minHeight: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1864_9479: {
    width: wp("25.555555555555554%"),
    minWidth: wp("25.555555555555554%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%")
  },
  ImageBackground_1864_9480: {
    width: wp("25.555555555555554%"),
    minWidth: wp("25.555555555555554%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.72677595628415%")
  },
  View_1864_9481: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_1864_9481: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9482: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.305555555555557%"),
    top: hp("27.459016393442617%")
  },
  View_1864_9483: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_9484: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("1.092896174863398%"),
    justifyContent: "center"
  },
  Text_1864_9484: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9485: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%"),
    top: hp("13.251366120218577%"),
    justifyContent: "flex-start"
  },
  Text_1864_9485: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9486: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%"),
    top: hp("16.530054644808743%"),
    justifyContent: "flex-start"
  },
  Text_1864_9486: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9487: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%"),
    top: hp("19.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_1864_9487: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9488: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.16666666666667%"),
    top: hp("13.251366120218577%"),
    justifyContent: "flex-start"
  },
  Text_1864_9488: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9489: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.16666666666667%"),
    top: hp("16.530054644808743%"),
    justifyContent: "flex-start"
  },
  Text_1864_9489: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9490: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.16666666666667%"),
    top: hp("19.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_1864_9490: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9491: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%"),
    top: hp("9.972677595628411%"),
    justifyContent: "flex-start"
  },
  Text_1864_9491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9492: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.513888888888893%"),
    top: hp("9.972677595628411%"),
    justifyContent: "flex-start"
  },
  Text_1864_9492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
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
