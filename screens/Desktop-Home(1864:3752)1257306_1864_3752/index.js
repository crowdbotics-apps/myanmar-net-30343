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
      <View style={styles.View_1864_3761}>
        <Text style={styles.Text_1864_3761}>Usage History</Text>
      </View>
      <View style={styles.View_1864_3762}>
        <Text style={styles.Text_1864_3762}>Packs History</Text>
      </View>
      <View style={styles.View_1864_3763}>
        <Text style={styles.Text_1864_3763}>Videos Only Packs History</Text>
      </View>
      <View style={styles.View_1864_3764}>
        <Text style={styles.Text_1864_3764}>Transaction History</Text>
      </View>
      <View style={styles.View_1864_3765}>
        <Text style={styles.Text_1864_3765}>Bill Pay History</Text>
      </View>
      <View style={styles.View_1864_3766}>
        <Text style={styles.Text_1864_3766}>Loan History</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4097/c5fa/0fc69945aac192853cc22e3fc8d772bc"
        }}
        style={styles.ImageBackground_1864_3767}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e730/62b6/28a4722f6f01a272e7b7a6f5014f6d90"
        }}
        style={styles.ImageBackground_1864_3768}
      />
      <View style={styles.View_1864_3769} />
      <View style={styles.View_1864_3770}>
        <Text style={styles.Text_1864_3770}>2020-03-13</Text>
      </View>
      <View style={styles.View_1864_3771}>
        <Text style={styles.Text_1864_3771}>2020-03-13</Text>
      </View>
      <View style={styles.View_1864_3772}>
        <Text style={styles.Text_1864_3772}>-</Text>
      </View>
      <View style={styles.View_1864_3773}>
        <Text style={styles.Text_1864_3773}>Su Su</Text>
      </View>
      <View style={styles.View_1864_3774}>
        <Text style={styles.Text_1864_3774}>Su Su</Text>
      </View>
      <View style={styles.View_1864_3775}>
        <Text style={styles.Text_1864_3775}>Su Su</Text>
      </View>
      <View style={styles.View_1864_3776}>
        <Text style={styles.Text_1864_3776}>2120075</Text>
      </View>
      <View style={styles.View_1864_3777}>
        <Text style={styles.Text_1864_3777}>2120075</Text>
      </View>
      <View style={styles.View_1864_3778}>
        <Text style={styles.Text_1864_3778}>2120075</Text>
      </View>
      <View style={styles.View_1864_3779}>
        <Text style={styles.Text_1864_3779}>SINV/20/07/00684</Text>
      </View>
      <View style={styles.View_1864_3780}>
        <Text style={styles.Text_1864_3780}>SINV/20/07/00567</Text>
      </View>
      <View style={styles.View_1864_3781}>
        <Text style={styles.Text_1864_3781}>-</Text>
      </View>
      <View style={styles.View_1864_3782}>
        <Text style={styles.Text_1864_3782}>Late fee</Text>
      </View>
      <View style={styles.View_1864_3783}>
        <Text style={styles.Text_1864_3783}>Bill pay</Text>
      </View>
      <View style={styles.View_1864_3784}>
        <Text style={styles.Text_1864_3784}>Bill pay</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a00a/0bf6/1cf2d82877db94177376e22e532d9b0e"
        }}
        style={styles.ImageBackground_1864_3785}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a00a/0bf6/1cf2d82877db94177376e22e532d9b0e"
        }}
        style={styles.ImageBackground_1864_3786}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a00a/0bf6/1cf2d82877db94177376e22e532d9b0e"
        }}
        style={styles.ImageBackground_1864_3787}
      />
      <View style={styles.View_1864_3788}>
        <Text style={styles.Text_1864_3788}>Category</Text>
      </View>
      <View style={styles.View_1864_3789}>
        <Text style={styles.Text_1864_3789}>Invoice Number</Text>
      </View>
      <View style={styles.View_1864_3790}>
        <Text style={styles.Text_1864_3790}>Service Month</Text>
      </View>
      <View style={styles.View_1864_3791}>
        <Text style={styles.Text_1864_3791}>Customer Name</Text>
      </View>
      <View style={styles.View_1864_3792}>
        <Text style={styles.Text_1864_3792}>Customer ID</Text>
      </View>
      <View style={styles.View_1864_3793}>
        <Text style={styles.Text_1864_3793}>23.12.2019</Text>
      </View>
      <View style={styles.View_1864_3794}>
        <Text style={styles.Text_1864_3794}>23.12.2019</Text>
      </View>
      <View style={styles.View_1864_3795}>
        <Text style={styles.Text_1864_3795}>23.12.2019</Text>
      </View>
      <View style={styles.View_1864_3796}>
        <Text style={styles.Text_1864_3796}>Date</Text>
      </View>
      <View style={styles.View_1864_3797}>
        <Text style={styles.Text_1864_3797}>Amount</Text>
      </View>
      <View style={styles.View_1864_3798}>
        <Text style={styles.Text_1864_3798}>94,000</Text>
      </View>
      <View style={styles.View_1864_3799}>
        <Text style={styles.Text_1864_3799}>94,000</Text>
      </View>
      <View style={styles.View_1864_3800}>
        <Text style={styles.Text_1864_3800}>10,000</Text>
      </View>
      <View style={styles.View_1864_3801}>
        <View style={styles.View_1864_3802} />
        <View style={styles.View_1864_3803} />
        <View style={styles.View_1864_3804}>
          <Text style={styles.Text_1864_3804}>
            Myanmar Net © 2021. All Rights Reserved.
          </Text>
        </View>
        <View style={styles.View_1864_3805}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
            }}
            style={styles.ImageBackground_1864_3806}
          />
          <View style={styles.View_1864_3807}>
            <Text style={styles.Text_1864_3807}>
              09-765338440 (9:00 AM to 7:30 PM Everyday)
            </Text>
          </View>
          <View style={styles.View_1864_3808}>
            <Text style={styles.Text_1864_3808}>
              No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
            }}
            style={styles.ImageBackground_1864_3809}
          />
        </View>
        <View style={styles.View_1864_3810}>
          <View style={styles.View_1864_3811}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
              }}
              style={styles.ImageBackground_1864_3812}
            />
          </View>
        </View>
        <View style={styles.View_1864_3815}>
          <View style={styles.View_1864_3816} />
          <View style={styles.View_1864_3817}>
            <View style={styles.View_1864_3818}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
                }}
                style={styles.ImageBackground_1864_3819}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_3822}>
          <View style={styles.View_1864_3823} />
          <View style={styles.View_1864_3824}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
              }}
              style={styles.ImageBackground_1864_3825}
            />
          </View>
        </View>
        <View style={styles.View_1864_3828}>
          <View style={styles.View_1864_3829} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
            }}
            style={styles.ImageBackground_1864_3830}
          />
        </View>
        <View style={styles.View_1864_3831}>
          <View style={styles.View_1864_3832}>
            <View style={styles.View_1864_3833}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/706d/9cb8/5d037e7bdaf90d0e59934c83a7830364"
                }}
                style={styles.ImageBackground_1864_3834}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1864_3841}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_3842}
        />
      </View>
      <View style={styles.View_1864_3860} />
      <View style={styles.View_1864_3861}>
        <Text style={styles.Text_1864_3861}>Account ID:</Text>
      </View>
      <View style={styles.View_1864_3862}>
        <Text style={styles.Text_1864_3862}>Level:</Text>
      </View>
      <View style={styles.View_1864_3863}>
        <Text style={styles.Text_1864_3863}>423665935</Text>
      </View>
      <View style={styles.View_1864_3864}>
        <View style={styles.View_1864_3865} />
        <View style={styles.View_1864_3866}>
          <Text style={styles.Text_1864_3866}>?</Text>
        </View>
        <View style={styles.View_1864_3867}>
          <Text style={styles.Text_1864_3867}>Reseller</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2b7/ee08/cd3d70c117f30a42004b9fa334f3970f"
        }}
        style={styles.ImageBackground_1864_3868}
      />
      <View style={styles.View_1864_3869}>
        <Text style={styles.Text_1864_3869}>History</Text>
      </View>
      <View style={styles.View_1864_12825}>
        <View style={styles.View_1864_12826} />
      </View>
      <View style={styles.View_1864_3871}>
        <Text style={styles.Text_1864_3871}>Home</Text>
      </View>
      <View style={styles.View_1864_3872}>
        <Text style={styles.Text_1864_3872}>Packages</Text>
      </View>
      <View style={styles.View_1864_3873}>
        <Text style={styles.Text_1864_3873}>News</Text>
      </View>
      <View style={styles.View_1864_3874}>
        <Text style={styles.Text_1864_3874}>Account</Text>
      </View>
      <View style={styles.View_1864_3875}>
        <Text style={styles.Text_1864_3875}>FAQs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a1c/a42f/04f3e9eaf692334d09ad09a3e97ea678"
        }}
        style={styles.ImageBackground_1864_3876}
      />
      <View style={styles.View_1864_3897}>
        <Text style={styles.Text_1864_3897}>Eng</Text>
      </View>
      <View style={styles.View_1864_3898}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_3899}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_3901}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_3902}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8664/2f77/3b4b2efcd01d9bb8d7b5fde63bc8001c"
        }}
        style={styles.ImageBackground_1864_3903}
      />
      <View style={styles.View_1864_3904}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d33/3ae6/15333e65143874e65c1a124d16c24eb6"
          }}
          style={styles.ImageBackground_1864_3905}
        />
        <View style={styles.View_1864_3906} />
      </View>
      <View style={styles.View_1864_3907}>
        <Text style={styles.Text_1864_3907}>Account Setting</Text>
      </View>
      <View style={styles.View_1864_3908}>
        <Text style={styles.Text_1864_3908}>Group Member</Text>
      </View>
      <View style={styles.View_1864_3909}>
        <Text style={styles.Text_1864_3909}>CPE Setting</Text>
      </View>
      <View style={styles.View_1864_3910}>
        <Text style={styles.Text_1864_3910}>Bill Pay</Text>
      </View>
      <View style={styles.View_1864_3911}>
        <Text style={styles.Text_1864_3911}>History</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61e8/a535/a913f3c37db0684d8316c9d072216fb7"
        }}
        style={styles.ImageBackground_1864_3912}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61e8/a535/a913f3c37db0684d8316c9d072216fb7"
        }}
        style={styles.ImageBackground_1864_3913}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61e8/a535/a913f3c37db0684d8316c9d072216fb7"
        }}
        style={styles.ImageBackground_1864_3914}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61e8/a535/a913f3c37db0684d8316c9d072216fb7"
        }}
        style={styles.ImageBackground_1864_3915}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140.0273224043716%") },
  View_1864_3761: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("29.23497267759563%"),
    justifyContent: "flex-start"
  },
  Text_1864_3761: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3762: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("29.23497267759563%"),
    justifyContent: "flex-start"
  },
  Text_1864_3762: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3763: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81944444444444%"),
    top: hp("29.23497267759563%"),
    justifyContent: "flex-start"
  },
  Text_1864_3763: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3764: {
    width: wp("9.652777777777779%"),
    minWidth: wp("9.652777777777779%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.138888888888886%"),
    top: hp("29.23497267759563%"),
    justifyContent: "flex-start"
  },
  Text_1864_3764: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3765: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.05555555555556%"),
    top: hp("29.23497267759563%"),
    justifyContent: "flex-start"
  },
  Text_1864_3765: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3766: {
    width: wp("6.319444444444445%"),
    minWidth: wp("6.319444444444445%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.95833333333334%"),
    top: hp("29.23497267759563%"),
    justifyContent: "flex-start"
  },
  Text_1864_3766: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_3767: {
    width: wp("73.54166666666667%"),
    minWidth: wp("73.54166666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.402777777777777%"),
    top: hp("33.60655737704918%")
  },
  ImageBackground_1864_3768: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.05555555555556%"),
    top: hp("33.60655737704918%")
  },
  View_1864_3769: {
    width: wp("73.47222222222223%"),
    minWidth: wp("73.47222222222223%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("36.33879781420765%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_3770: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.083333333333336%"),
    top: hp("45.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1864_3770: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3771: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.083333333333336%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_1864_3771: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3772: {
    width: wp("0.2777777777777778%"),
    minWidth: wp("0.2777777777777778%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.01388888888889%"),
    top: hp("59.15300546448088%"),
    justifyContent: "flex-start"
  },
  Text_1864_3772: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3773: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.36111111111111%"),
    top: hp("45.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1864_3773: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3774: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.36111111111111%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_1864_3774: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3775: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.291666666666664%"),
    top: hp("59.15300546448088%"),
    justifyContent: "flex-start"
  },
  Text_1864_3775: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3776: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.93055555555556%"),
    top: hp("45.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1864_3776: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3777: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.93055555555556%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_1864_3777: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3778: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.86111111111111%"),
    top: hp("59.15300546448088%"),
    justifyContent: "flex-start"
  },
  Text_1864_3778: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3779: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.98611111111111%"),
    top: hp("45.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1864_3779: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3780: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.98611111111111%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_1864_3780: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3781: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.916666666666664%"),
    top: hp("59.15300546448088%"),
    justifyContent: "flex-start"
  },
  Text_1864_3781: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3782: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("59.15300546448088%"),
    justifyContent: "flex-start"
  },
  Text_1864_3782: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3783: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("45.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1864_3783: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3784: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_1864_3784: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_3785: {
    width: wp("73.40277777777777%"),
    minWidth: wp("73.40277777777777%"),
    height: hp("0.00001231757897719527%"),
    minHeight: hp("0.00001231757897719527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("43.169398907103826%")
  },
  ImageBackground_1864_3786: {
    width: wp("73.40277777777777%"),
    minWidth: wp("73.40277777777777%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("50%")
  },
  ImageBackground_1864_3787: {
    width: wp("73.40277777777777%"),
    minWidth: wp("73.40277777777777%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("56.830601092896174%")
  },
  View_1864_3788: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("38.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_3788: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3789: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%"),
    top: hp("38.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_3789: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3790: {
    width: wp("6.319444444444445%"),
    minWidth: wp("6.319444444444445%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.736111111111114%"),
    top: hp("38.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_3790: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3791: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.013888888888886%"),
    top: hp("38.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_3791: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3792: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.583333333333336%"),
    top: hp("38.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_3792: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3793: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("45.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1864_3793: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3794: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_1864_3794: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3795: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.375%"),
    top: hp("59.15300546448088%"),
    justifyContent: "flex-start"
  },
  Text_1864_3795: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3796: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.58333333333333%"),
    top: hp("38.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_3796: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3797: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.72222222222223%"),
    top: hp("38.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_3797: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3798: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.93055555555556%"),
    top: hp("45.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1864_3798: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3799: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.93055555555556%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_1864_3799: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3800: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.86111111111111%"),
    top: hp("59.15300546448088%"),
    justifyContent: "flex-start"
  },
  Text_1864_3800: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3801: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("120.49180327868851%")
  },
  View_1864_3802: {
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
  View_1864_3803: {
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
  View_1864_3804: {
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
  Text_1864_3804: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3805: {
    width: wp("29.097222222222225%"),
    minWidth: wp("29.097222222222225%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.694444444444445%"),
    top: hp("4.0983606557377215%")
  },
  ImageBackground_1864_3806: {
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
  View_1864_3807: {
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
  Text_1864_3807: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3808: {
    width: wp("26.944444444444443%"),
    minWidth: wp("26.944444444444443%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.152777777777777%"),
    top: hp("4.234972677595621%"),
    justifyContent: "flex-start"
  },
  Text_1864_3808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_3809: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737693%"),
    resizeMode: "cover"
  },
  View_1864_3810: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.76388888888889%"),
    top: hp("5.567073300887998%")
  },
  View_1864_3811: {
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
  ImageBackground_1864_3812: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653832607582046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.056321885850692865%")
  },
  View_1864_3815: {
    width: wp("1.6910821861690943%"),
    minWidth: wp("1.6910821861690943%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28564453125%"),
    top: hp("5.567073300887998%")
  },
  View_1864_3816: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00003178914387547138%"),
    top: hp("0%")
  },
  View_1864_3817: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.22179442025272067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_3818: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_3819: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_3822: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.80712890625%"),
    top: hp("5.567073300887998%")
  },
  View_1864_3823: {
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
  View_1864_3824: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_3825: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_3828: {
    width: wp("1.6910918553670249%"),
    minWidth: wp("1.6910918553670249%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.32874891493056%"),
    top: hp("5.567073300887998%")
  },
  View_1864_3829: {
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
  ImageBackground_1864_3830: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000042385525162558224%")
  },
  View_1864_3831: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.85064019097223%"),
    top: hp("5.567073300887998%")
  },
  View_1864_3832: {
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
  View_1864_3833: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.1700979764344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11274973551431344%")
  },
  ImageBackground_1864_3834: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_3841: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("128.4153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_3842: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_3860: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(241, 250, 255, 1)"
  },
  View_1864_3861: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("14.207650273224044%"),
    justifyContent: "flex-start"
  },
  Text_1864_3861: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3862: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("14.207650273224044%"),
    justifyContent: "flex-start"
  },
  Text_1864_3862: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3863: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.555555555555554%"),
    top: hp("14.207650273224044%"),
    justifyContent: "center"
  },
  Text_1864_3863: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3864: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.05555555555556%"),
    top: hp("13.387978142076504%")
  },
  View_1864_3865: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.138888888888886%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1864_3866: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_1864_3866: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3867: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316919%"),
    justifyContent: "center"
  },
  Text_1864_3867: {
    color: "rgba(57, 151, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_3868: {
    width: wp("1.1534949982837537e-7%"),
    minWidth: wp("1.1534949982837537e-7%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.59722222222222%"),
    top: hp("12.978142076502733%")
  },
  View_1864_3869: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("23.633879781420767%"),
    justifyContent: "flex-start"
  },
  Text_1864_3869: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12825: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1864_12826: {
    width: wp("100%"),
    height: hp("10.245901639344263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(38, 60, 145, 1)"
  },
  View_1864_3871: {
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
  Text_1864_3871: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3872: {
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
  Text_1864_3872: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3873: {
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
  Text_1864_3873: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3874: {
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
  Text_1864_3874: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3875: {
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
  Text_1864_3875: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_3876: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_3897: {
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
  Text_1864_3897: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3898: {
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
  ImageBackground_1864_3899: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_3901: {
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
  ImageBackground_1864_3902: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.166666666666664%"),
    top: hp("13.797814207650273%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_3903: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%")
  },
  View_1864_3904: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("27.38519679001772%"),
    minHeight: hp("27.38519679001772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.72222222222222%"),
    top: hp("7.724115757342896%")
  },
  ImageBackground_1864_3905: {
    width: wp("2.6388894187079535%"),
    height: hp("6.525329423081027%"),
    top: hp("-2.6658021687158477%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.499999735090469%")
  },
  View_1864_3906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26.44475718013576%"),
    minHeight: hp("26.44475718013576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9404083418715841%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_3907: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("10.51912568306011%"),
    justifyContent: "flex-start"
  },
  Text_1864_3907: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3908: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("20.3551912568306%"),
    justifyContent: "flex-start"
  },
  Text_1864_3908: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3909: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("15.437158469945356%"),
    justifyContent: "flex-start"
  },
  Text_1864_3909: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3910: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("25.273224043715846%"),
    justifyContent: "flex-start"
  },
  Text_1864_3910: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_3911: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("30.191256830601095%"),
    justifyContent: "flex-start"
  },
  Text_1864_3911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_3912: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("14.071038251366119%")
  },
  ImageBackground_1864_3913: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("18.989071038251364%")
  },
  ImageBackground_1864_3914: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("23.90710382513661%")
  },
  ImageBackground_1864_3915: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("28.825136612021858%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
