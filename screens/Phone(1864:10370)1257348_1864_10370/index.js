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
      <View style={styles.View_1864_10371} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b16/a4cb/b84b3eb59b5d9128ae73fac2e75c91b9"
        }}
        style={styles.ImageBackground_1864_10372}
      />
      <View style={styles.View_1864_10373} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_10374}
      />
      <View style={styles.View_1864_10378}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_10379}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_10381}
      />
      <View style={styles.View_1864_10382}>
        <Text style={styles.Text_1864_10382}>R10000093</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5121/cf5b/9f99cb6b2c6b312b88eaf3a8dc8c95c7"
        }}
        style={styles.ImageBackground_1864_10383}
      />
      <View style={styles.View_1864_10384} />
      <View style={styles.View_1864_10385}>
        <Text style={styles.Text_1864_10385}>
          Myanmar Net and Ooredoo partnership! A Wa Thone and Data packs
          Available now!
        </Text>
      </View>
      <View style={styles.View_1864_10386}>
        <Text style={styles.Text_1864_10386}>How to buy</Text>
      </View>
      <View style={styles.View_1864_10387} />
      <View style={styles.View_1864_10388}>
        <Text style={styles.Text_1864_10388}>Maximum speed</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672e/54cc/703e70ec85130415365dea83fc1ad7fa"
        }}
        style={styles.ImageBackground_1864_10389}
      />
      <View style={styles.View_1864_10390} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_10391}
      />
      <View style={styles.View_1864_10392}>
        <Text style={styles.Text_1864_10392}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_10393}>
        <Text style={styles.Text_1864_10393}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_10394}>
        <Text style={styles.Text_1864_10394}>Unlimited</Text>
      </View>
      <View style={styles.View_1864_10395}>
        <Text style={styles.Text_1864_10395}>11-01-2020</Text>
      </View>
      <View style={styles.View_1864_10396}>
        <Text style={styles.Text_1864_10396}>
          3GB Ooredoo Data + 3GB MNet Data
        </Text>
      </View>
      <View style={styles.View_1864_10397}>
        <Text style={styles.Text_1864_10397}>Active Packs (1)</Text>
      </View>
      <View style={styles.View_1864_10398}>
        <Text style={styles.Text_1864_10398}>Internet</Text>
      </View>
      <View style={styles.View_1864_10399}>
        <Text style={styles.Text_1864_10399}>6Mbps</Text>
      </View>
      <View style={styles.View_1864_10400}>
        <Text style={styles.Text_1864_10400}>Purchase History</Text>
      </View>
      <View style={styles.View_1864_10401}>
        <Text style={styles.Text_1864_10401}>Active</Text>
      </View>
      <View style={styles.View_1864_10402}>
        <Text style={styles.Text_1864_10402}>Expired</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee4/0d5d/d5daf1d0e0be14386cab54ea6f71fcb4"
        }}
        style={styles.ImageBackground_1864_10403}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/061e/e9ac/595a85184a0fef7ea7ca0e9ad05964ef"
        }}
        style={styles.ImageBackground_1864_10404}
      />
      <View style={styles.View_1864_10405} />
      <View style={styles.View_1864_10406}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5345/6e93/13df8dfc4c0b426c51b83472e8c6402e"
          }}
          style={styles.ImageBackground_1864_10407}
        />
        <View style={styles.View_1864_10408}>
          <Text style={styles.Text_1864_10408}>
            09-765338440 (9:00 AM to 7:30 PM Everyday)
          </Text>
        </View>
      </View>
      <View style={styles.View_1864_10409}>
        <Text style={styles.Text_1864_10409}>
          No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d86a/1c07/7e759385bba8fb770347632d4c30bca9"
        }}
        style={styles.ImageBackground_1864_10410}
      />
      <View style={styles.View_1864_10411} />
      <View style={styles.View_1864_10412}>
        <Text style={styles.Text_1864_10412}>
          Myanmar Net © 2018. All Rights Reserved.
        </Text>
      </View>
      <View style={styles.View_1864_10413}>
        <View style={styles.View_1864_10414}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
            }}
            style={styles.ImageBackground_1864_10415}
          />
        </View>
      </View>
      <View style={styles.View_1864_10418}>
        <View style={styles.View_1864_10419} />
        <View style={styles.View_1864_10420}>
          <View style={styles.View_1864_10421}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
              }}
              style={styles.ImageBackground_1864_10422}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_10425}>
        <View style={styles.View_1864_10426} />
        <View style={styles.View_1864_10427}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4088/6f1a/3630c7255f4c6f88e5b10ba1734da702"
            }}
            style={styles.ImageBackground_1864_10428}
          />
        </View>
      </View>
      <View style={styles.View_1864_10431}>
        <View style={styles.View_1864_10432} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
          }}
          style={styles.ImageBackground_1864_10433}
        />
      </View>
      <View style={styles.View_1864_10434}>
        <View style={styles.View_1864_10435}>
          <View style={styles.View_1864_10436}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff5/fbef/0efc44e786157dd9fbf5616a13085dfe"
              }}
              style={styles.ImageBackground_1864_10437}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_10444}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/9499/bac441cb005bd828afa02be8ddc83cad"
          }}
          style={styles.ImageBackground_1864_10445}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a0/6689/02fc154db7272f3035351e6858c578fd"
        }}
        style={styles.ImageBackground_1864_10463}
      />
      <View style={styles.View_1864_10484} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10485}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cc0/8e2f/e43e9bf37cede0ed744f1e036c2daecb"
        }}
        style={styles.ImageBackground_1864_10486}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cc0/8e2f/e43e9bf37cede0ed744f1e036c2daecb"
        }}
        style={styles.ImageBackground_1864_10487}
      />
      <View style={styles.View_1864_10488}>
        <Text style={styles.Text_1864_10488}>20.06.2021</Text>
      </View>
      <View style={styles.View_1864_10489}>
        <Text style={styles.Text_1864_10489}>19.7.2021</Text>
      </View>
      <View style={styles.View_1864_10490}>
        <Text style={styles.Text_1864_10490}>Start Date</Text>
      </View>
      <View style={styles.View_1864_10491}>
        <Text style={styles.Text_1864_10491}>Expired Date</Text>
      </View>
      <View style={styles.View_1864_10492}>
        <Text style={styles.Text_1864_10492}>
          3GB Ooredoo Data + 3GB MNet Data
        </Text>
      </View>
      <View style={styles.View_1864_10493}>
        <Text style={styles.Text_1864_10493}>2033 MB</Text>
      </View>
      <View style={styles.View_1864_10494}>
        <Text style={styles.Text_1864_10494}>Plan Name</Text>
      </View>
      <View style={styles.View_1864_10495}>
        <Text style={styles.Text_1864_10495}>Remaining</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("145.76502732240436%") },
  View_1864_10371: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("60.245901639344254%"),
    minHeight: hp("60.245901639344254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  ImageBackground_1864_10372: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.82125603864735%"),
    top: hp("6.284153005464481%")
  },
  View_1864_10373: {
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
  ImageBackground_1864_10374: {
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
  View_1864_10378: {
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
  ImageBackground_1864_10379: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10381: {
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
  View_1864_10382: {
    width: wp("20.048309178743963%"),
    minWidth: wp("20.048309178743963%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("13.524590163934427%"),
    justifyContent: "flex-start"
  },
  Text_1864_10382: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10383: {
    width: wp("6.280732270024249%"),
    minWidth: wp("6.280732270024249%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("12.978142076502733%"),
    resizeMode: "cover"
  },
  View_1864_10384: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("18.852459016393443%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_10385: {
    width: wp("72.94685990338165%"),
    minWidth: wp("72.94685990338165%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("21.03825136612022%"),
    justifyContent: "flex-start"
  },
  Text_1864_10385: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10386: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.51207729468599%"),
    top: hp("31.010928961748636%"),
    justifyContent: "center"
  },
  Text_1864_10386: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10387: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("42.62295081967213%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_10388: {
    width: wp("29.71014492753623%"),
    minWidth: wp("29.71014492753623%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067632%"),
    top: hp("44.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_1864_10388: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10389: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("44.67213114754098%"),
    resizeMode: "cover"
  },
  View_1864_10390: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("50.81967213114754%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_10391: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.73429951690821%"),
    top: hp("58.46994535519126%")
  },
  View_1864_10392: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("60.92896174863388%"),
    justifyContent: "flex-start"
  },
  Text_1864_10392: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10393: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("63.934426229508205%"),
    justifyContent: "flex-start"
  },
  Text_1864_10393: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10394: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.23671497584541%"),
    top: hp("60.92896174863388%"),
    justifyContent: "flex-start"
  },
  Text_1864_10394: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10395: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.028985507246375%"),
    top: hp("63.934426229508205%"),
    justifyContent: "flex-start"
  },
  Text_1864_10395: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10396: {
    width: wp("55.072463768115945%"),
    minWidth: wp("55.072463768115945%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("57.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_1864_10396: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10397: {
    width: wp("28.26086956521739%"),
    minWidth: wp("28.26086956521739%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("53.00546448087432%"),
    justifyContent: "flex-start"
  },
  Text_1864_10397: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10398: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("37.56830601092896%"),
    justifyContent: "flex-start"
  },
  Text_1864_10398: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10399: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.19323671497585%"),
    top: hp("44.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_1864_10399: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10400: {
    width: wp("33.57487922705314%"),
    minWidth: wp("33.57487922705314%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("72.6775956284153%"),
    justifyContent: "flex-start"
  },
  Text_1864_10400: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10401: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("77.73224043715847%"),
    justifyContent: "flex-start"
  },
  Text_1864_10401: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10402: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("77.73224043715847%"),
    justifyContent: "flex-start"
  },
  Text_1864_10402: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10403: {
    width: wp("95.89371980676329%"),
    minWidth: wp("95.89371980676329%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("81.9672131147541%")
  },
  ImageBackground_1864_10404: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("81.9672131147541%")
  },
  View_1864_10405: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113.79781420765028%"),
    backgroundColor: "rgba(54, 54, 54, 1)"
  },
  View_1864_10406: {
    width: wp("77.23926046620244%"),
    minWidth: wp("77.23926046620244%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.851788949275361%"),
    top: hp("118.5792349726776%")
  },
  ImageBackground_1864_10407: {
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
  View_1864_10408: {
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
  Text_1864_10408: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10409: {
    width: wp("82.56610372792119%"),
    minWidth: wp("82.56610372792119%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.819859601449277%"),
    top: hp("122.81420765027322%"),
    justifyContent: "flex-start"
  },
  Text_1864_10409: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10410: {
    width: wp("4.842586793761323%"),
    minWidth: wp("4.842586793761323%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("122.67759562841529%"),
    resizeMode: "cover"
  },
  View_1864_10411: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("140.84699453551912%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_10412: {
    width: wp("54.96335974062122%"),
    minWidth: wp("54.96335974062122%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.76003925120773%"),
    top: hp("142.34972677595627%"),
    justifyContent: "flex-start"
  },
  Text_1864_10412: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10413: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661837%"),
    top: hp("132.92349726775956%")
  },
  View_1864_10414: {
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
  ImageBackground_1864_10415: {
    width: wp("5.50835973398697%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653165556693921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19602015398550776%")
  },
  View_1864_10418: {
    width: wp("5.882024995370763%"),
    minWidth: wp("5.882024995370763%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.748792270531396%"),
    top: hp("133.0601092896175%")
  },
  View_1864_10419: {
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
  View_1864_10420: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0.22172771516395073%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10421: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10422: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10425: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.1214145531401%"),
    top: hp("133.0601092896175%")
  },
  View_1864_10426: {
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
  View_1864_10427: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10428: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10431: {
    width: wp("5.882058627363564%"),
    minWidth: wp("5.882058627363564%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("133.0601092896175%")
  },
  View_1864_10432: {
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
  ImageBackground_1864_10433: {
    width: wp("5.881911660162147%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00023588466183355195%")
  },
  View_1864_10434: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94685990338165%"),
    top: hp("133.0601092896175%")
  },
  View_1864_10435: {
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
  View_1864_10436: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.1700979764344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.39227619263283486%")
  },
  ImageBackground_1864_10437: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10444: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("134.4262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.6086956521739%")
  },
  ImageBackground_1864_10445: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10463: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_10484: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("27.459016393442624%"),
    minHeight: hp("27.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("84.15300546448088%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1
  },
  ImageBackground_1864_10485: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("91.09460382513662%")
  },
  ImageBackground_1864_10486: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("97.95081967213115%")
  },
  ImageBackground_1864_10487: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("104.78142076502732%")
  },
  View_1864_10488: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.12030117753623%"),
    top: hp("100%"),
    justifyContent: "flex-start"
  },
  Text_1864_10488: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10489: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.05266832729468%"),
    top: hp("107.10382513661203%"),
    justifyContent: "flex-start"
  },
  Text_1864_10489: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10490: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7289968297101455%"),
    top: hp("100.13661202185793%"),
    justifyContent: "flex-start"
  },
  Text_1864_10490: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10491: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7289968297101455%"),
    top: hp("107.10382513661203%"),
    justifyContent: "flex-start"
  },
  Text_1864_10491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10492: {
    width: wp("54.830917874396135%"),
    minWidth: wp("54.830917874396135%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95652173913043%"),
    top: hp("86.47540983606558%"),
    justifyContent: "flex-start"
  },
  Text_1864_10492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10493: {
    width: wp("49.51690821256038%"),
    minWidth: wp("49.51690821256038%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.7536231884058%"),
    top: hp("93.16939890710383%"),
    justifyContent: "flex-start"
  },
  Text_1864_10493: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10494: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("86.47540983606558%"),
    justifyContent: "flex-start"
  },
  Text_1864_10494: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10495: {
    width: wp("16.183574879227052%"),
    minWidth: wp("16.183574879227052%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("93.16939890710383%"),
    justifyContent: "flex-start"
  },
  Text_1864_10495: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
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
