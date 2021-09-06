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
      <View style={styles.View_1864_10009} />
      <View style={styles.View_1864_10010}>
        <Text style={styles.Text_1864_10010}>Loan Repayment Progress</Text>
      </View>
      <View style={styles.View_1864_10011}>
        <Text style={styles.Text_1864_10011}>Repayment Schedule</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7138/a722/4972df04f340cefe234beb289cb1a6e7"
        }}
        style={styles.ImageBackground_1864_10012}
      />
      <View style={styles.View_1864_10013}>
        <Text style={styles.Text_1864_10013}>Total late fee</Text>
      </View>
      <View style={styles.View_1864_10014}>
        <Text style={styles.Text_1864_10014}>3000</Text>
      </View>
      <View style={styles.View_1864_10015} />
      <View style={styles.View_1864_10016} />
      <View style={styles.View_1864_10017}>
        <Text style={styles.Text_1864_10017}>444,000</Text>
      </View>
      <View style={styles.View_1864_10018}>
        <Text style={styles.Text_1864_10018}>74,000</Text>
      </View>
      <View style={styles.View_1864_10019}>
        <Text style={styles.Text_1864_10019}>Paid</Text>
      </View>
      <View style={styles.View_1864_10020}>
        <Text style={styles.Text_1864_10020}>Total repayment amount</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfdd/8368/2ed2d720bf72e0cb340d96a814e15d64"
        }}
        style={styles.ImageBackground_1864_10021}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4133/67fa/9fd06aa3dd74e73327ffeae419bf6a44"
        }}
        style={styles.ImageBackground_1864_10022}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246a/a4df/20d7840319aa49374d868e2e708305a7"
        }}
        style={styles.ImageBackground_1864_10023}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246a/a4df/20d7840319aa49374d868e2e708305a7"
        }}
        style={styles.ImageBackground_1864_10024}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246a/a4df/20d7840319aa49374d868e2e708305a7"
        }}
        style={styles.ImageBackground_1864_10025}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4133/67fa/9fd06aa3dd74e73327ffeae419bf6a44"
        }}
        style={styles.ImageBackground_1864_10026}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b77/644f/c6ccf5e6310f259b347ecb4ade7bcdbc"
        }}
        style={styles.ImageBackground_1864_10027}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b77/644f/c6ccf5e6310f259b347ecb4ade7bcdbc"
        }}
        style={styles.ImageBackground_1864_10028}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b77/644f/c6ccf5e6310f259b347ecb4ade7bcdbc"
        }}
        style={styles.ImageBackground_1864_10029}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b77/644f/c6ccf5e6310f259b347ecb4ade7bcdbc"
        }}
        style={styles.ImageBackground_1864_10030}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b77/644f/c6ccf5e6310f259b347ecb4ade7bcdbc"
        }}
        style={styles.ImageBackground_1864_10031}
      />
      <View style={styles.View_1864_10032}>
        <Text style={styles.Text_1864_10032}>01-01-2021</Text>
      </View>
      <View style={styles.View_1864_10033}>
        <Text style={styles.Text_1864_10033}>01-03-2021</Text>
      </View>
      <View style={styles.View_1864_10034}>
        <Text style={styles.Text_1864_10034}>01-02-2021</Text>
      </View>
      <View style={styles.View_1864_10035}>
        <Text style={styles.Text_1864_10035}>Due Date</Text>
      </View>
      <View style={styles.View_1864_10036}>
        <Text style={styles.Text_1864_10036}>01-05-2021</Text>
      </View>
      <View style={styles.View_1864_10037}>
        <Text style={styles.Text_1864_10037}>01-04-2021</Text>
      </View>
      <View style={styles.View_1864_10038}>
        <Text style={styles.Text_1864_10038}>01-06-2021</Text>
      </View>
      <View style={styles.View_1864_10039}>
        <Text style={styles.Text_1864_10039}>74,000 </Text>
      </View>
      <View style={styles.View_1864_10040}>
        <Text style={styles.Text_1864_10040}>74,000</Text>
      </View>
      <View style={styles.View_1864_10041}>
        <Text style={styles.Text_1864_10041}>Amount</Text>
      </View>
      <View style={styles.View_1864_10042}>
        <Text style={styles.Text_1864_10042}>74,000</Text>
      </View>
      <View style={styles.View_1864_10043}>
        <Text style={styles.Text_1864_10043}>74,000</Text>
      </View>
      <View style={styles.View_1864_10044}>
        <Text style={styles.Text_1864_10044}>74,000</Text>
      </View>
      <View style={styles.View_1864_10045}>
        <Text style={styles.Text_1864_10045}>74,000</Text>
      </View>
      <View style={styles.View_1864_10046}>
        <Text style={styles.Text_1864_10046}>67,000 </Text>
      </View>
      <View style={styles.View_1864_10047}>
        <Text style={styles.Text_1864_10047}>+ 7,000</Text>
      </View>
      <View style={styles.View_1864_10048}>
        <Text style={styles.Text_1864_10048}>74,000</Text>
      </View>
      <View style={styles.View_1864_10049}>
        <Text style={styles.Text_1864_10049}>loan per month</Text>
      </View>
      <View style={styles.View_1864_10050}>
        <Text style={styles.Text_1864_10050}>Interest</Text>
      </View>
      <View style={styles.View_1864_10051}>
        <Text style={styles.Text_1864_10051}>Balance</Text>
      </View>
      <View style={styles.View_1864_10052}>
        <Text style={styles.Text_1864_10052}>View Loan details</Text>
      </View>
      <View style={styles.View_1864_10053} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_10054}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405b/bced/393d0fa7a0a3d9b93e0c7dbcbcf48c4a"
        }}
        style={styles.ImageBackground_1864_10058}
      />
      <View style={styles.View_1864_10079}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_10080}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_10082}
      />
      <View style={styles.View_1864_10083} />
      <View style={styles.View_1864_10084}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5345/6e93/13df8dfc4c0b426c51b83472e8c6402e"
          }}
          style={styles.ImageBackground_1864_10085}
        />
        <View style={styles.View_1864_10086}>
          <Text style={styles.Text_1864_10086}>
            09-765338440 (9:00 AM to 7:30 PM Everyday)
          </Text>
        </View>
      </View>
      <View style={styles.View_1864_10087}>
        <Text style={styles.Text_1864_10087}>
          No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d86a/1c07/7e759385bba8fb770347632d4c30bca9"
        }}
        style={styles.ImageBackground_1864_10088}
      />
      <View style={styles.View_1864_10089} />
      <View style={styles.View_1864_10090}>
        <Text style={styles.Text_1864_10090}>
          Myanmar Net © 2018. All Rights Reserved.
        </Text>
      </View>
      <View style={styles.View_1864_10091}>
        <View style={styles.View_1864_10092}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
            }}
            style={styles.ImageBackground_1864_10093}
          />
        </View>
      </View>
      <View style={styles.View_1864_10096}>
        <View style={styles.View_1864_10097} />
        <View style={styles.View_1864_10098}>
          <View style={styles.View_1864_10099}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
              }}
              style={styles.ImageBackground_1864_10100}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_10103}>
        <View style={styles.View_1864_10104} />
        <View style={styles.View_1864_10105}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
            }}
            style={styles.ImageBackground_1864_10106}
          />
        </View>
      </View>
      <View style={styles.View_1864_10109}>
        <View style={styles.View_1864_10110} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
          }}
          style={styles.ImageBackground_1864_10111}
        />
      </View>
      <View style={styles.View_1864_10112}>
        <View style={styles.View_1864_10113}>
          <View style={styles.View_1864_10114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff5/fbef/0efc44e786157dd9fbf5616a13085dfe"
              }}
              style={styles.ImageBackground_1864_10115}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_10122}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_10123}
        />
      </View>
      <View style={styles.View_1864_10141}>
        <Text style={styles.Text_1864_10141}>Home &gt; Loan Repayment</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140.84699453551912%") },
  View_1864_10009: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("87.43169398907104%"),
    minHeight: hp("87.43169398907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("17.076502732240435%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_10010: {
    width: wp("45.65217391304348%"),
    minWidth: wp("45.65217391304348%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("19.672131147540984%"),
    justifyContent: "flex-start"
  },
  Text_1864_10010: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10011: {
    width: wp("36.473429951690825%"),
    minWidth: wp("36.473429951690825%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("49.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_1864_10011: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10012: {
    width: wp("92.512077294686%"),
    minWidth: wp("92.512077294686%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("46.994535519125684%")
  },
  View_1864_10013: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("37.97814207650273%"),
    justifyContent: "flex-start"
  },
  Text_1864_10013: {
    color: "rgba(199, 4, 4, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10014: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.29951690821255%"),
    top: hp("38.3879781420765%"),
    justifyContent: "flex-start"
  },
  Text_1864_10014: {
    color: "rgba(199, 4, 4, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10015: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("30.05464480874317%"),
    backgroundColor: "rgba(228, 228, 228, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_10016: {
    width: wp("27.536231884057973%"),
    minWidth: wp("27.536231884057973%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("30.05464480874317%"),
    backgroundColor: "rgba(54, 147, 39, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_10017: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.26086956521739%"),
    top: hp("25.81967213114754%"),
    justifyContent: "flex-start"
  },
  Text_1864_10017: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10018: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("25.81967213114754%"),
    justifyContent: "flex-start"
  },
  Text_1864_10018: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10019: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("32.78688524590164%"),
    justifyContent: "flex-start"
  },
  Text_1864_10019: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10020: {
    width: wp("42.028985507246375%"),
    minWidth: wp("42.028985507246375%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("32.78688524590164%"),
    justifyContent: "flex-start"
  },
  Text_1864_10020: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10021: {
    width: wp("2.1739130434782608%"),
    height: hp("0.546448087431694%"),
    top: hp("59.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.85507246376811%")
  },
  ImageBackground_1864_10022: {
    width: wp("1.2077294685990339%"),
    height: hp("1.092896174863388%"),
    top: hp("74.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%")
  },
  ImageBackground_1864_10023: {
    width: wp("1.2077294685990339%"),
    height: hp("0.9562841530054645%"),
    top: hp("81.14754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%")
  },
  ImageBackground_1864_10024: {
    width: wp("1.2077294685990339%"),
    height: hp("0.9562841530054645%"),
    top: hp("87.70491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%")
  },
  ImageBackground_1864_10025: {
    width: wp("1.2077294685990339%"),
    height: hp("0.9562841530054645%"),
    top: hp("94.26229508196722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%")
  },
  ImageBackground_1864_10026: {
    width: wp("1.2077294685990339%"),
    height: hp("1.092896174863388%"),
    top: hp("100.81967213114753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.82125603864735%")
  },
  ImageBackground_1864_10027: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("71.85792349726776%")
  },
  ImageBackground_1864_10028: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("84.8360655737705%")
  },
  ImageBackground_1864_10029: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("98.08743169398907%")
  },
  ImageBackground_1864_10030: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("78.27868852459017%")
  },
  ImageBackground_1864_10031: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("91.53005464480874%")
  },
  View_1864_10032: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("58.879781420765035%"),
    justifyContent: "flex-start"
  },
  Text_1864_10032: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10033: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("80.60109289617486%"),
    justifyContent: "flex-start"
  },
  Text_1864_10033: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10034: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("74.04371584699454%"),
    justifyContent: "flex-start"
  },
  Text_1864_10034: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10035: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("54.644808743169406%"),
    justifyContent: "flex-start"
  },
  Text_1864_10035: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10036: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("93.85245901639344%"),
    justifyContent: "flex-start"
  },
  Text_1864_10036: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10037: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("87.29508196721312%"),
    justifyContent: "flex-start"
  },
  Text_1864_10037: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10038: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("100.40983606557377%"),
    justifyContent: "flex-start"
  },
  Text_1864_10038: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10039: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.26086956521739%"),
    top: hp("58.879781420765035%"),
    justifyContent: "flex-start"
  },
  Text_1864_10039: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10040: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.50241545893721%"),
    top: hp("74.04371584699454%"),
    justifyContent: "flex-start"
  },
  Text_1864_10040: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10041: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.22705314009661%"),
    top: hp("54.644808743169406%"),
    justifyContent: "flex-start"
  },
  Text_1864_10041: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10042: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.50241545893721%"),
    top: hp("80.46448087431693%"),
    justifyContent: "flex-start"
  },
  Text_1864_10042: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10043: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.50241545893721%"),
    top: hp("86.88524590163934%"),
    justifyContent: "flex-start"
  },
  Text_1864_10043: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10044: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.50241545893721%"),
    top: hp("93.44262295081968%"),
    justifyContent: "flex-start"
  },
  Text_1864_10044: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10045: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.50241545893721%"),
    top: hp("100%"),
    justifyContent: "flex-start"
  },
  Text_1864_10045: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10046: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.86956521739131%"),
    top: hp("62.02185792349727%"),
    justifyContent: "flex-start"
  },
  Text_1864_10046: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10047: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.86956521739131%"),
    top: hp("65.02732240437157%"),
    justifyContent: "flex-start"
  },
  Text_1864_10047: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10048: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: hp("68.16939890710383%"),
    justifyContent: "flex-start"
  },
  Text_1864_10048: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10049: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("62.02185792349727%"),
    justifyContent: "flex-start"
  },
  Text_1864_10049: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10050: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("65.02732240437157%"),
    justifyContent: "flex-start"
  },
  Text_1864_10050: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10051: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("68.16939890710383%"),
    justifyContent: "flex-start"
  },
  Text_1864_10051: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10052: {
    width: wp("26.570048309178745%"),
    minWidth: wp("26.570048309178745%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("41.80327868852459%"),
    justifyContent: "flex-start"
  },
  Text_1864_10052: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10053: {
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
  ImageBackground_1864_10054: {
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
  ImageBackground_1864_10058: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_10079: {
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
  ImageBackground_1864_10080: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10082: {
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
  View_1864_10083: {
    width: wp("100.2415458937198%"),
    minWidth: wp("100.2415458937198%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("108.87978142076503%"),
    backgroundColor: "rgba(54, 54, 54, 1)"
  },
  View_1864_10084: {
    width: wp("77.23926046620244%"),
    minWidth: wp("77.23926046620244%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.851553064613526%"),
    top: hp("113.66120218579235%")
  },
  ImageBackground_1864_10085: {
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
  View_1864_10086: {
    width: wp("70.21750482384134%"),
    minWidth: wp("70.21750482384134%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.021696671195652%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_10086: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10087: {
    width: wp("82.56610372792119%"),
    minWidth: wp("82.56610372792119%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.82009548611111%"),
    top: hp("117.89617486338797%"),
    justifyContent: "flex-start"
  },
  Text_1864_10087: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10088: {
    width: wp("4.842586793761323%"),
    minWidth: wp("4.842586793761323%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("117.75956284153007%"),
    resizeMode: "cover"
  },
  View_1864_10089: {
    width: wp("100.2415458937198%"),
    minWidth: wp("100.2415458937198%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("135.92896174863387%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_10090: {
    width: wp("54.96335974062122%"),
    minWidth: wp("54.96335974062122%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.76003925120773%"),
    top: hp("137.43169398907105%"),
    justifyContent: "flex-start"
  },
  Text_1864_10090: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10091: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661837%"),
    top: hp("128.0054644808743%")
  },
  View_1864_10092: {
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
  ImageBackground_1864_10093: {
    width: wp("5.50835973398697%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653165556694205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19590221165458743%")
  },
  View_1864_10096: {
    width: wp("5.882024995370763%"),
    minWidth: wp("5.882024995370763%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.748792270531396%"),
    top: hp("128.14207650273224%")
  },
  View_1864_10097: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0001179423309238814%"),
    top: hp("0%")
  },
  View_1864_10098: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0.2217277151639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10099: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10100: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10103: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.1214145531401%"),
    top: hp("128.14207650273224%")
  },
  View_1864_10104: {
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
  View_1864_10105: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10106: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10109: {
    width: wp("5.882058627363564%"),
    minWidth: wp("5.882058627363564%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("128.14207650273224%")
  },
  View_1864_10110: {
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
  ImageBackground_1864_10111: {
    width: wp("5.881911660162147%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00011794233090967055%")
  },
  View_1864_10112: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94685990338165%"),
    top: hp("128.14207650273224%")
  },
  View_1864_10113: {
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
  View_1864_10114: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.17009797643444813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3921582503019323%")
  },
  ImageBackground_1864_10115: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10122: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("129.5081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.6086956521739%")
  },
  ImageBackground_1864_10123: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10141: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_1864_10141: {
    color: "rgba(53, 53, 53, 1)",
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
