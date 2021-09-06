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
      <View style={styles.View_1864_4121}>
        <View style={styles.View_1864_4122} />
        <View style={styles.View_1864_4123} />
        <View style={styles.View_1864_4124}>
          <Text style={styles.Text_1864_4124}>
            Myanmar Net © 2021. All Rights Reserved.
          </Text>
        </View>
        <View style={styles.View_1864_4125}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
            }}
            style={styles.ImageBackground_1864_4126}
          />
          <View style={styles.View_1864_4127}>
            <Text style={styles.Text_1864_4127}>
              09-765338440 (9:00 AM to 7:30 PM Everyday)
            </Text>
          </View>
          <View style={styles.View_1864_4128}>
            <Text style={styles.Text_1864_4128}>
              No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
            }}
            style={styles.ImageBackground_1864_4129}
          />
        </View>
        <View style={styles.View_1864_4130}>
          <View style={styles.View_1864_4131}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
              }}
              style={styles.ImageBackground_1864_4132}
            />
          </View>
        </View>
        <View style={styles.View_1864_4135}>
          <View style={styles.View_1864_4136} />
          <View style={styles.View_1864_4137}>
            <View style={styles.View_1864_4138}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
                }}
                style={styles.ImageBackground_1864_4139}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_4142}>
          <View style={styles.View_1864_4143} />
          <View style={styles.View_1864_4144}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
              }}
              style={styles.ImageBackground_1864_4145}
            />
          </View>
        </View>
        <View style={styles.View_1864_4148}>
          <View style={styles.View_1864_4149} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cae7/c5ad/db43abd9690531346dadf050e138103d"
            }}
            style={styles.ImageBackground_1864_4150}
          />
        </View>
        <View style={styles.View_1864_4151}>
          <View style={styles.View_1864_4152}>
            <View style={styles.View_1864_4153}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/706d/9cb8/5d037e7bdaf90d0e59934c83a7830364"
                }}
                style={styles.ImageBackground_1864_4154}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1864_4161}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/9499/bac441cb005bd828afa02be8ddc83cad"
          }}
          style={styles.ImageBackground_1864_4162}
        />
      </View>
      <View style={styles.View_1864_4180}>
        <View style={styles.View_1864_4181}>
          <View style={styles.View_1864_4182}>
            <View style={styles.View_1864_4183} />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_4184}>
        <View style={styles.View_1864_4185}>
          <View style={styles.View_1864_4186}>
            <View style={styles.View_1864_4187} />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_4188}>
        <View style={styles.View_1864_4189}>
          <View style={styles.View_1864_4190}>
            <View style={styles.View_1864_4191} />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_4192}>
        <Text style={styles.Text_1864_4192}>Postpaid Bill Payment</Text>
      </View>
      <View style={styles.View_1864_4193}>
        <Text style={styles.Text_1864_4193}>Postpaid Bill Payment</Text>
      </View>
      <View style={styles.View_1864_4194}>
        <Text style={styles.Text_1864_4194}>Loan Repayment Late Fee</Text>
      </View>
      <View style={styles.View_1864_4195}>
        <Text style={styles.Text_1864_4195}>Total late fee - 10,000 Ks</Text>
      </View>
      <View style={styles.View_1864_4196}>
        <Text style={styles.Text_1864_4196}>Overdue days- 2</Text>
      </View>
      <View style={styles.View_1864_4197} />
      <View style={styles.View_1864_4198}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5129/7383/ae6e1ce8abe61ed88618bff1b24bf6cf"
          }}
          style={styles.ImageBackground_1864_4199}
        />
      </View>
      <View style={styles.View_1864_4223}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5129/7383/ae6e1ce8abe61ed88618bff1b24bf6cf"
          }}
          style={styles.ImageBackground_1864_4224}
        />
      </View>
      <View style={styles.View_1864_4248}>
        <Text style={styles.Text_1864_4248}>Day Rate - 5000</Text>
      </View>
      <View style={styles.View_1864_4249}>
        <Text style={styles.Text_1864_4249}>Amount : 20,000 Ks</Text>
      </View>
      <View style={styles.View_1864_4250}>
        <Text style={styles.Text_1864_4250}>
          Invioce No : SINV/21/03/179572
        </Text>
      </View>
      <View style={styles.View_1864_4251}>
        <Text style={styles.Text_1864_4251}>
          Invioce No : SINV/21/04/179572
        </Text>
      </View>
      <View style={styles.View_1864_4252}>
        <Text style={styles.Text_1864_4252}>Service Month : Mar 2021</Text>
      </View>
      <View style={styles.View_1864_4253}>
        <Text style={styles.Text_1864_4253}>Service Month : Apr 2021</Text>
      </View>
      <View style={styles.View_1864_4254}>
        <Text style={styles.Text_1864_4254}>Payment Method : Home Visit</Text>
      </View>
      <View style={styles.View_1864_4255}>
        <Text style={styles.Text_1864_4255}>Payment Method : Home Visit</Text>
      </View>
      <View style={styles.View_1864_4256}>
        <Text style={styles.Text_1864_4256}>Due Date : 1st to 5th </Text>
      </View>
      <View style={styles.View_1864_4257}>
        <Text style={styles.Text_1864_4257}>Amount : 20,000 Ks</Text>
      </View>
      <View style={styles.View_1864_4258}>
        <Text style={styles.Text_1864_4258}>Due Date : 1st to 5th </Text>
      </View>
      <View style={styles.View_1864_4259} />
      <View style={styles.View_1864_4260}>
        <Text style={styles.Text_1864_4260}>Account ID:</Text>
      </View>
      <View style={styles.View_1864_4261}>
        <Text style={styles.Text_1864_4261}>Level:</Text>
      </View>
      <View style={styles.View_1864_4262}>
        <Text style={styles.Text_1864_4262}>423665935</Text>
      </View>
      <View style={styles.View_1864_4263}>
        <View style={styles.View_1864_4264} />
        <View style={styles.View_1864_4265}>
          <Text style={styles.Text_1864_4265}>?</Text>
        </View>
        <View style={styles.View_1864_4266}>
          <Text style={styles.Text_1864_4266}>Registered user</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2b7/ee08/cd3d70c117f30a42004b9fa334f3970f"
        }}
        style={styles.ImageBackground_1864_4267}
      />
      <View style={styles.View_1864_4268} />
      <View style={styles.View_1864_4269}>
        <Text style={styles.Text_1864_4269}>Home</Text>
      </View>
      <View style={styles.View_1864_4270}>
        <Text style={styles.Text_1864_4270}>Packages</Text>
      </View>
      <View style={styles.View_1864_4271}>
        <Text style={styles.Text_1864_4271}>News</Text>
      </View>
      <View style={styles.View_1864_4272}>
        <Text style={styles.Text_1864_4272}>Account</Text>
      </View>
      <View style={styles.View_1864_4273}>
        <Text style={styles.Text_1864_4273}>FAQs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405b/bced/393d0fa7a0a3d9b93e0c7dbcbcf48c4a"
        }}
        style={styles.ImageBackground_1864_4274}
      />
      <View style={styles.View_1864_4295}>
        <Text style={styles.Text_1864_4295}>Eng</Text>
      </View>
      <View style={styles.View_1864_4296}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_4297}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_4299}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_4300}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8664/2f77/3b4b2efcd01d9bb8d7b5fde63bc8001c"
        }}
        style={styles.ImageBackground_1864_4301}
      />
      <View style={styles.View_1864_4302}>
        <Text style={styles.Text_1864_4302}>Bill Pay</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61e8/a535/a913f3c37db0684d8316c9d072216fb7"
        }}
        style={styles.ImageBackground_1864_4303}
      />
      <View style={styles.View_1864_4304} />
      <View style={styles.View_1864_4305}>
        <View style={styles.View_1864_4306} />
        <View style={styles.View_1864_4307}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a2b/d67b/91819fb788b2bf6b9c6da446f73050a6"
            }}
            style={styles.ImageBackground_1864_4308}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87a5/9f8d/3b411e694b0afda71aa53d43f090bae0"
          }}
          style={styles.ImageBackground_1864_4332}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140.0273224043716%") },
  View_1864_4121: {
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
  View_1864_4122: {
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
  View_1864_4123: {
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
  View_1864_4124: {
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
  Text_1864_4124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4125: {
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
  ImageBackground_1864_4126: {
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
  View_1864_4127: {
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
  Text_1864_4127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4128: {
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
  Text_1864_4128: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_4129: {
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
  View_1864_4130: {
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
  View_1864_4131: {
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
  ImageBackground_1864_4132: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653165556693921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05635579427084281%")
  },
  View_1864_4135: {
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
  View_1864_4136: {
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
  View_1864_4137: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.22172771516393652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4138: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_4139: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4142: {
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
  View_1864_4143: {
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
  View_1864_4144: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_4145: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4148: {
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
  View_1864_4149: {
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
  ImageBackground_1864_4150: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027146184%")
  },
  View_1864_4151: {
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
  View_1864_4152: {
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
  View_1864_4153: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.1700979764344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11277940538194287%")
  },
  ImageBackground_1864_4154: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4161: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("128.4153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_4162: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4180: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("29.23497267759563%")
  },
  View_1864_4181: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_4182: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_4183: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_4184: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.19444444444444%"),
    top: hp("29.23497267759563%")
  },
  View_1864_4185: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_4186: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_4187: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_4188: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.19444444444444%"),
    top: hp("29.23497267759563%")
  },
  View_1864_4189: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_4190: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_4191: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_4192: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("31.967213114754102%"),
    justifyContent: "flex-start"
  },
  Text_1864_4192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4193: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.30555555555556%"),
    top: hp("31.967213114754102%"),
    justifyContent: "flex-start"
  },
  Text_1864_4193: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4194: {
    width: wp("12.847222222222221%"),
    minWidth: wp("12.847222222222221%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.30555555555556%"),
    top: hp("31.420765027322407%"),
    justifyContent: "flex-start"
  },
  Text_1864_4194: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4195: {
    width: wp("10.694444444444445%"),
    minWidth: wp("10.694444444444445%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.30555555555556%"),
    top: hp("41.939890710382514%"),
    justifyContent: "flex-start"
  },
  Text_1864_4195: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4196: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.375%"),
    top: hp("36.6120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_4196: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4197: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.44444444444444%"),
    top: hp("41.53005464480874%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_4198: {
    width: wp("2.0833208825853133%"),
    height: hp("4.097217549391783%"),
    top: hp("36.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.611111111111114%")
  },
  ImageBackground_1864_4199: {
    width: wp("2.0833208825853133%"),
    height: hp("4.097217549391783%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4223: {
    width: wp("2.0833208825853133%"),
    height: hp("4.097217549391783%"),
    top: hp("36.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.54166666666667%")
  },
  ImageBackground_1864_4224: {
    width: wp("2.0833208825853133%"),
    height: hp("4.097217549391783%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4248: {
    width: wp("6.805555555555555%"),
    minWidth: wp("6.805555555555555%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.375%"),
    top: hp("39.61748633879781%"),
    justifyContent: "center"
  },
  Text_1864_4248: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4249: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.30555555555556%"),
    top: hp("49.04371584699454%"),
    justifyContent: "flex-start"
  },
  Text_1864_4249: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4250: {
    width: wp("14.166666666666666%"),
    minWidth: wp("14.166666666666666%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("36.6120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_4250: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4251: {
    width: wp("14.166666666666666%"),
    minWidth: wp("14.166666666666666%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.30555555555556%"),
    top: hp("36.6120218579235%"),
    justifyContent: "flex-start"
  },
  Text_1864_4251: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4252: {
    width: wp("11.319444444444445%"),
    minWidth: wp("11.319444444444445%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("39.89071038251366%"),
    justifyContent: "center"
  },
  Text_1864_4252: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4253: {
    width: wp("10.902777777777779%"),
    minWidth: wp("10.902777777777779%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.30555555555556%"),
    top: hp("39.89071038251366%"),
    justifyContent: "center"
  },
  Text_1864_4253: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4254: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("43.0327868852459%"),
    justifyContent: "center"
  },
  Text_1864_4254: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4255: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.30555555555556%"),
    top: hp("43.0327868852459%"),
    justifyContent: "center"
  },
  Text_1864_4255: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4256: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("46.17486338797814%"),
    justifyContent: "center"
  },
  Text_1864_4256: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4257: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("49.31693989071038%"),
    justifyContent: "center"
  },
  Text_1864_4257: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4258: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.30555555555556%"),
    top: hp("46.17486338797814%"),
    justifyContent: "center"
  },
  Text_1864_4258: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4259: {
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
  View_1864_4260: {
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
  Text_1864_4260: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4261: {
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
  Text_1864_4261: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4262: {
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
  Text_1864_4262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4263: {
    width: wp("11.805555555555555%"),
    minWidth: wp("11.805555555555555%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.05555555555556%"),
    top: hp("13.387978142076504%")
  },
  View_1864_4264: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.652777777777779%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1864_4265: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.416666666666664%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_1864_4265: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4266: {
    width: wp("7.708333333333334%"),
    minWidth: wp("7.708333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316919%"),
    justifyContent: "center"
  },
  Text_1864_4266: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_4267: {
    width: wp("1.1534944456394038e-7%"),
    minWidth: wp("1.1534944456394038e-7%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.59722222222222%"),
    top: hp("12.978142076502733%")
  },
  View_1864_4268: {
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
  View_1864_4269: {
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
  Text_1864_4269: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4270: {
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
  Text_1864_4270: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4271: {
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
  Text_1864_4271: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4272: {
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
  Text_1864_4272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4273: {
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
  Text_1864_4273: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_4274: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_4295: {
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
  Text_1864_4295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4296: {
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
  ImageBackground_1864_4297: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_4299: {
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
  ImageBackground_1864_4300: {
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
  ImageBackground_1864_4301: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%")
  },
  View_1864_4302: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("23.633879781420767%"),
    justifyContent: "flex-start"
  },
  Text_1864_4302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_4303: {
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
  View_1864_4304: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("140.0273224043716%"),
    minHeight: hp("140.0273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1864_4305: {
    width: wp("26.180555555555557%"),
    minWidth: wp("26.180555555555557%"),
    height: hp("54.78142076502732%"),
    minHeight: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.138888888888886%"),
    top: hp("33.33333333333333%")
  },
  View_1864_4306: {
    width: wp("26.180555555555557%"),
    minWidth: wp("26.180555555555557%"),
    height: hp("54.78142076502732%"),
    minHeight: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1864_4307: {
    width: wp("20.630872514512806%"),
    height: hp("40.57387054943648%"),
    top: hp("8.879781420765035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%")
  },
  ImageBackground_1864_4308: {
    width: wp("20.630872514512806%"),
    height: hp("40.57387054943648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_4332: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.4487161896919294%"),
    minHeight: hp("2.4487161896919294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.402777777777786%"),
    top: hp("3.278688524590173%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
