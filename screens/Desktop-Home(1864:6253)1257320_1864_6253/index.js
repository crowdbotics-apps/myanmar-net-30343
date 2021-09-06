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
      <View style={styles.View_1864_6262}>
        <Text style={styles.Text_1864_6262}>Internet</Text>
      </View>
      <View style={styles.View_1864_6263}>
        <Text style={styles.Text_1864_6263}>Entertainment</Text>
      </View>
      <View style={styles.View_1864_6264} />
      <View style={styles.View_1864_6265}>
        <Text style={styles.Text_1864_6265}>
          A Wa Thone , A Wa Kyi + Free Myanmar Cast
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dab1/bd39/964dfe3e72172d9b3e5de180d138690b"
        }}
        style={styles.ImageBackground_1864_6266}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ee/d93e/5d1c62a8babb4bbd44fa341a008321f5"
        }}
        style={styles.ImageBackground_1864_6267}
      />
      <View style={styles.View_1864_6268}>
        <View style={styles.View_1864_6269} />
        <View style={styles.View_1864_6270}>
          <Text style={styles.Text_1864_6270}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_6271}>
        <View style={styles.View_1864_6272} />
        <View style={styles.View_1864_6273}>
          <Text style={styles.Text_1864_6273}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_6274}>
        <View style={styles.View_1864_6275} />
        <View style={styles.View_1864_6276}>
          <Text style={styles.Text_1864_6276}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_6277}>
        <View style={styles.View_1864_6278} />
        <View style={styles.View_1864_6279}>
          <Text style={styles.Text_1864_6279}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_6280}>
        <View style={styles.View_1864_6281} />
        <View style={styles.View_1864_6282}>
          <Text style={styles.Text_1864_6282}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_6283}>
        <Text style={styles.Text_1864_6283}>
          A Wa Thone , A Wa Kyi (30 days) + Canal Plus
        </Text>
      </View>
      <View style={styles.View_1864_6284}>
        <View style={styles.View_1864_6285} />
        <View style={styles.View_1864_6286}>
          <Text style={styles.Text_1864_6286}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_6287}>
        <View style={styles.View_1864_6288} />
        <View style={styles.View_1864_6289}>
          <Text style={styles.Text_1864_6289}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_6290}>
        <Text style={styles.Text_1864_6290}>Data Internet (30 days)</Text>
      </View>
      <View style={styles.View_1864_6291}>
        <View style={styles.View_1864_6292} />
        <View style={styles.View_1864_6293}>
          <Text style={styles.Text_1864_6293}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_6294}>
        <View style={styles.View_1864_6295} />
        <View style={styles.View_1864_6296}>
          <Text style={styles.Text_1864_6296}>Buy</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ae1/228a/0f3db6304a8f7ee496adc3adc5610e5c"
        }}
        style={styles.ImageBackground_1864_6297}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d45/0343/45abe5736f5c4b496951e7573a5a3e12"
        }}
        style={styles.ImageBackground_1864_6298}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d32/5c1f/115aeb4f69bb2ee904407c5b4f14f3d4"
        }}
        style={styles.ImageBackground_1864_6299}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627b/8bab/b5f05df5218bb672c90d7d3fa4612fa1"
        }}
        style={styles.ImageBackground_1864_6300}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d530/ed53/d34ad612492fc773870a1a0a030ba856"
        }}
        style={styles.ImageBackground_1864_6301}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42fe/35cd/39740570d0ce294d07a3f53ef67e6f1f"
        }}
        style={styles.ImageBackground_1864_6302}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/266d/adf2/aaf3d40a00d5d6266e04665a40283b79"
        }}
        style={styles.ImageBackground_1864_6303}
      />
      <View style={styles.View_1864_6304}>
        <View style={styles.View_1864_6305} />
        <View style={styles.View_1864_6306} />
        <View style={styles.View_1864_6307}>
          <Text style={styles.Text_1864_6307}>
            Myanmar Net © 2021. All Rights Reserved.
          </Text>
        </View>
        <View style={styles.View_1864_6308}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
            }}
            style={styles.ImageBackground_1864_6309}
          />
          <View style={styles.View_1864_6310}>
            <Text style={styles.Text_1864_6310}>
              09-765338440 (9:00 AM to 7:30 PM Everyday)
            </Text>
          </View>
          <View style={styles.View_1864_6311}>
            <Text style={styles.Text_1864_6311}>
              No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
            }}
            style={styles.ImageBackground_1864_6312}
          />
        </View>
        <View style={styles.View_1864_6313}>
          <View style={styles.View_1864_6314}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
              }}
              style={styles.ImageBackground_1864_6315}
            />
          </View>
        </View>
        <View style={styles.View_1864_6318}>
          <View style={styles.View_1864_6319} />
          <View style={styles.View_1864_6320}>
            <View style={styles.View_1864_6321}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
                }}
                style={styles.ImageBackground_1864_6322}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_6325}>
          <View style={styles.View_1864_6326} />
          <View style={styles.View_1864_6327}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
              }}
              style={styles.ImageBackground_1864_6328}
            />
          </View>
        </View>
        <View style={styles.View_1864_6331}>
          <View style={styles.View_1864_6332} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
            }}
            style={styles.ImageBackground_1864_6333}
          />
        </View>
        <View style={styles.View_1864_6334}>
          <View style={styles.View_1864_6335}>
            <View style={styles.View_1864_6336}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff5/fbef/0efc44e786157dd9fbf5616a13085dfe"
                }}
                style={styles.ImageBackground_1864_6337}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1864_6344}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_6345}
        />
      </View>
      <View style={styles.View_1864_6363} />
      <View style={styles.View_1864_6364}>
        <Text style={styles.Text_1864_6364}>Home</Text>
      </View>
      <View style={styles.View_1864_6365}>
        <Text style={styles.Text_1864_6365}>Packages</Text>
      </View>
      <View style={styles.View_1864_6366}>
        <Text style={styles.Text_1864_6366}>News</Text>
      </View>
      <View style={styles.View_1864_6367}>
        <Text style={styles.Text_1864_6367}>Account</Text>
      </View>
      <View style={styles.View_1864_6368}>
        <Text style={styles.Text_1864_6368}>FAQs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a1c/a42f/04f3e9eaf692334d09ad09a3e97ea678"
        }}
        style={styles.ImageBackground_1864_6369}
      />
      <View style={styles.View_1864_6390}>
        <Text style={styles.Text_1864_6390}>Eng</Text>
      </View>
      <View style={styles.View_1864_6391}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_6392}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_6394}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/0c01/88539a39a3670d9f8662e790074e8512"
        }}
        style={styles.ImageBackground_1864_6395}
      />
      <View style={styles.View_1864_6396} />
      <View style={styles.View_1864_6397}>
        <View style={styles.View_1864_6398} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd6/14ec/0293ed228f974e9ea575a018311e2b27"
          }}
          style={styles.ImageBackground_1864_6399}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd6/14ec/0293ed228f974e9ea575a018311e2b27"
          }}
          style={styles.ImageBackground_1864_6400}
        />
        <View style={styles.View_1864_6401}>
          <Text style={styles.Text_1864_6401}>Are you sure to buy?</Text>
        </View>
        <View style={styles.View_1864_6402}>
          <View style={styles.View_1864_6403}>
            <View style={styles.View_1864_6404} />
            <View style={styles.View_1864_6405}>
              <Text style={styles.Text_1864_6405}>Buy</Text>
            </View>
          </View>
          <View style={styles.View_1864_6406}>
            <View style={styles.View_1864_6407} />
            <View style={styles.View_1864_6408}>
              <Text style={styles.Text_1864_6408}>Close</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1864_6409}>
          <View style={styles.View_1864_6410} />
          <View style={styles.View_1864_6411}>
            <Text style={styles.Text_1864_6411}>?</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d021/4b17/b0d38945425eafff1b380b04e4093374"
          }}
          style={styles.ImageBackground_1864_6412}
        />
        <View style={styles.View_1864_6413}>
          <Text style={styles.Text_1864_6413}>
            5 days unlimited internet card prices is 1000ks with 10Mbps speed on
            first 150MB of data each day: 1Mbps thereafter. Daily quota resets
            at midnight for 5 days. Using A Wa Thone 5 day card, you no longer
            need to check your mobile data and able to use unlimited internet.
            Note : 1 device for 1 Myanmar Net user account.
          </Text>
        </View>
        <View style={styles.View_1864_6414}>
          <Text style={styles.Text_1864_6414}>Auto Renew</Text>
        </View>
        <View style={styles.View_1864_6415} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("205.05464480874318%") },
  View_1864_6262: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_1864_6262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6263: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444446%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_1864_6263: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6264: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("16.39344262295082%"),
    backgroundColor: "rgba(38, 60, 145, 1)"
  },
  View_1864_6265: {
    width: wp("21.875%"),
    minWidth: wp("21.875%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("19.672131147540984%"),
    justifyContent: "flex-start"
  },
  Text_1864_6265: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_6266: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("24.59016393442623%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_6267: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.40277777777778%"),
    top: hp("24.59016393442623%"),
    resizeMode: "cover"
  },
  View_1864_6268: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.59722222222222%"),
    top: hp("41.53005464480874%")
  },
  View_1864_6269: {
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
  View_1864_6270: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111107%"),
    top: hp("0.7627059853142057%"),
    justifyContent: "center"
  },
  Text_1864_6270: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6271: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.666666666666664%"),
    top: hp("41.53005464480874%")
  },
  View_1864_6272: {
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
  View_1864_6273: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111143%"),
    top: hp("0.7627059853142057%"),
    justifyContent: "center"
  },
  Text_1864_6273: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6274: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.736111111111114%"),
    top: hp("41.53005464480874%")
  },
  View_1864_6275: {
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
  View_1864_6276: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111072%"),
    top: hp("0.7627059853142057%"),
    justifyContent: "center"
  },
  Text_1864_6276: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6277: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.80555555555556%"),
    top: hp("41.53005464480874%")
  },
  View_1864_6278: {
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
  View_1864_6279: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111072%"),
    top: hp("0.7627059853142057%"),
    justifyContent: "center"
  },
  Text_1864_6279: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6280: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.875%"),
    top: hp("41.53005464480874%")
  },
  View_1864_6281: {
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
  View_1864_6282: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111143%"),
    top: hp("0.7627059853142057%"),
    justifyContent: "center"
  },
  Text_1864_6282: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6283: {
    width: wp("22.36111111111111%"),
    minWidth: wp("22.36111111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("51.09289617486339%"),
    justifyContent: "flex-start"
  },
  Text_1864_6283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6284: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.59722222222222%"),
    top: hp("72.95081967213115%")
  },
  View_1864_6285: {
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
  View_1864_6286: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111107%"),
    top: hp("0.7627059853142129%"),
    justifyContent: "center"
  },
  Text_1864_6286: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6287: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.666666666666664%"),
    top: hp("72.95081967213115%")
  },
  View_1864_6288: {
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
  View_1864_6289: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111143%"),
    top: hp("0.7627059853142129%"),
    justifyContent: "center"
  },
  Text_1864_6289: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6290: {
    width: wp("11.319444444444445%"),
    minWidth: wp("11.319444444444445%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("82.78688524590164%"),
    justifyContent: "flex-start"
  },
  Text_1864_6290: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6291: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.59722222222222%"),
    top: hp("104.64480874316939%")
  },
  View_1864_6292: {
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
  View_1864_6293: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111107%"),
    top: hp("0.7627059853141986%"),
    justifyContent: "center"
  },
  Text_1864_6293: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6294: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.068002544465612%"),
    minHeight: hp("4.068002544465612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.666666666666664%"),
    top: hp("104.64480874316939%")
  },
  View_1864_6295: {
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
  View_1864_6296: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111143%"),
    top: hp("0.7627059853141986%"),
    justifyContent: "center"
  },
  Text_1864_6296: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_6297: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.47222222222222%"),
    top: hp("24.59016393442623%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_6298: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.54166666666667%"),
    top: hp("24.59016393442623%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_6299: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.61111111111111%"),
    top: hp("24.59016393442623%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_6300: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("56.01092896174863%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_6301: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.40277777777778%"),
    top: hp("56.01092896174863%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_6302: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("87.70491803278688%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_6303: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.40277777777778%"),
    top: hp("87.70491803278688%"),
    resizeMode: "cover"
  },
  View_1864_6304: {
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
  View_1864_6305: {
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
  View_1864_6306: {
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
  View_1864_6307: {
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
  Text_1864_6307: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6308: {
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
  ImageBackground_1864_6309: {
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
  View_1864_6310: {
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
  Text_1864_6310: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6311: {
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
  Text_1864_6311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_6312: {
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
  View_1864_6313: {
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
  View_1864_6314: {
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
  ImageBackground_1864_6315: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653165556693921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.056287977430557135%")
  },
  View_1864_6318: {
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
  View_1864_6319: {
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
  View_1864_6320: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.2217277151639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6321: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_6322: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6325: {
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
  View_1864_6326: {
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
  View_1864_6327: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_6328: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6331: {
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
  View_1864_6332: {
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
  ImageBackground_1864_6333: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.1331433572404137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6334: {
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
  View_1864_6335: {
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
  View_1864_6336: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.1700979764344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11271158854165719%")
  },
  ImageBackground_1864_6337: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6344: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("193.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_6345: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6363: {
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
  View_1864_6364: {
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
  Text_1864_6364: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6365: {
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
  Text_1864_6365: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6366: {
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
  Text_1864_6366: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6367: {
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
  Text_1864_6367: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6368: {
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
  Text_1864_6368: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_6369: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_6390: {
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
  Text_1864_6390: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6391: {
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
  ImageBackground_1864_6392: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_6394: {
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
  ImageBackground_1864_6395: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%")
  },
  View_1864_6396: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("205.05464480874318%"),
    minHeight: hp("205.05464480874318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1864_6397: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    height: hp("68.30601092896174%"),
    minHeight: hp("68.30601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.833333333333336%"),
    top: hp("21.03825136612022%")
  },
  View_1864_6398: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    height: hp("68.30601092896174%"),
    minHeight: hp("68.30601092896174%"),
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
  ImageBackground_1864_6399: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777146%"),
    top: hp("7.240437158469941%")
  },
  ImageBackground_1864_6400: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.868852459016395%")
  },
  View_1864_6401: {
    width: wp("10.13888888888889%"),
    minWidth: wp("10.13888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.04918032786885%"),
    justifyContent: "flex-start"
  },
  Text_1864_6401: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6402: {
    width: wp("15.069444444444443%"),
    minWidth: wp("15.069444444444443%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%"),
    top: hp("60.65573770491804%")
  },
  View_1864_6403: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.125%"),
    top: hp("0%")
  },
  View_1864_6404: {
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
  View_1864_6405: {
    width: wp("1.875%"),
    minWidth: wp("1.875%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "center"
  },
  Text_1864_6405: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6406: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_6407: {
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
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_6408: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "center"
  },
  Text_1864_6408: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6409: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.069444444444443%"),
    top: hp("55.05464480874316%")
  },
  View_1864_6410: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
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
  View_1864_6411: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_1864_6411: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_6412: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("24.841083464075307%"),
    minHeight: hp("24.841083464075307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777779%"),
    top: hp("9.972677595628415%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_6413: {
    width: wp("25.069444444444443%"),
    minWidth: wp("25.069444444444443%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("37.431693989071036%"),
    justifyContent: "flex-start"
  },
  Text_1864_6413: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6414: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666643%"),
    top: hp("55.46448087431693%"),
    justifyContent: "center"
  },
  Text_1864_6414: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6415: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%"),
    top: hp("55.32786885245902%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(154, 150, 150, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
