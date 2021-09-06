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
      <View style={styles.View_1864_4614} />
      <View style={styles.View_1864_4615} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/502f/c3fe/065c9898118372d23388b96342a69a3f"
        }}
        style={styles.ImageBackground_1864_4616}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/502f/c3fe/065c9898118372d23388b96342a69a3f"
        }}
        style={styles.ImageBackground_1864_4617}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ede/fefd/65c3b0d7ac575a076bebfe7ecb7fc1f5"
        }}
        style={styles.ImageBackground_1864_4618}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ede/fefd/65c3b0d7ac575a076bebfe7ecb7fc1f5"
        }}
        style={styles.ImageBackground_1864_4619}
      />
      <View style={styles.View_1864_4620}>
        <Text style={styles.Text_1864_4620}>Network:</Text>
      </View>
      <View style={styles.View_1864_4621}>
        <Text style={styles.Text_1864_4621}>Network:</Text>
      </View>
      <View style={styles.View_1864_4622}>
        <Text style={styles.Text_1864_4622}>CPE ID :</Text>
      </View>
      <View style={styles.View_1864_4623}>
        <Text style={styles.Text_1864_4623}>CPE ID :</Text>
      </View>
      <View style={styles.View_1864_4624}>
        <Text style={styles.Text_1864_4624}>Current Active Plan:</Text>
      </View>
      <View style={styles.View_1864_4625}>
        <Text style={styles.Text_1864_4625}>Current Active Plan:</Text>
      </View>
      <View style={styles.View_1864_4626}>
        <Text style={styles.Text_1864_4626}>CG123456</Text>
      </View>
      <View style={styles.View_1864_4627}>
        <Text style={styles.Text_1864_4627}>CG234433</Text>
      </View>
      <View style={styles.View_1864_4628}>
        <Text style={styles.Text_1864_4628}>VF7BC</Text>
      </View>
      <View style={styles.View_1864_4629}>
        <Text style={styles.Text_1864_4629}>VF7BC</Text>
      </View>
      <View style={styles.View_1864_4630}>
        <View style={styles.View_1864_4631}>
          <Text style={styles.Text_1864_4631}>10 Mbps</Text>
        </View>
      </View>
      <View style={styles.View_1864_4632}>
        <View style={styles.View_1864_4633}>
          <Text style={styles.Text_1864_4633}>10 Mbps</Text>
        </View>
      </View>
      <View style={styles.View_1864_4634}>
        <View style={styles.View_1864_4635}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf14/b9ca/73d92a1e858e3a86d43bfc229ffd1789"
            }}
            style={styles.ImageBackground_1864_4636}
          />
        </View>
      </View>
      <View style={styles.View_1864_4639}>
        <View style={styles.View_1864_4640}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf14/b9ca/73d92a1e858e3a86d43bfc229ffd1789"
            }}
            style={styles.ImageBackground_1864_4641}
          />
        </View>
      </View>
      <View style={styles.View_1864_4644} />
      <View style={styles.View_1864_4645} />
      <View style={styles.View_1864_4646}>
        <Text style={styles.Text_1864_4646}>Change wifi password</Text>
      </View>
      <View style={styles.View_1864_4647}>
        <Text style={styles.Text_1864_4647}>Change wifi password</Text>
      </View>
      <View style={styles.View_1864_4648}>
        <View style={styles.View_1864_4649} />
        <View style={styles.View_1864_4650} />
        <View style={styles.View_1864_4651}>
          <Text style={styles.Text_1864_4651}>
            Myanmar Net © 2021. All Rights Reserved.
          </Text>
        </View>
        <View style={styles.View_1864_4652}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
            }}
            style={styles.ImageBackground_1864_4653}
          />
          <View style={styles.View_1864_4654}>
            <Text style={styles.Text_1864_4654}>
              09-765338440 (9:00 AM to 7:30 PM Everyday)
            </Text>
          </View>
          <View style={styles.View_1864_4655}>
            <Text style={styles.Text_1864_4655}>
              No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
            }}
            style={styles.ImageBackground_1864_4656}
          />
        </View>
        <View style={styles.View_1864_4657}>
          <View style={styles.View_1864_4658}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
              }}
              style={styles.ImageBackground_1864_4659}
            />
          </View>
        </View>
        <View style={styles.View_1864_4662}>
          <View style={styles.View_1864_4663} />
          <View style={styles.View_1864_4664}>
            <View style={styles.View_1864_4665}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c7b/8fe5/4808769a1938017856783ba264a49b62"
                }}
                style={styles.ImageBackground_1864_4666}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1864_4669}>
          <View style={styles.View_1864_4670} />
          <View style={styles.View_1864_4671}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
              }}
              style={styles.ImageBackground_1864_4672}
            />
          </View>
        </View>
        <View style={styles.View_1864_4675}>
          <View style={styles.View_1864_4676} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
            }}
            style={styles.ImageBackground_1864_4677}
          />
        </View>
        <View style={styles.View_1864_4678}>
          <View style={styles.View_1864_4679}>
            <View style={styles.View_1864_4680}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5e/d9d8/024bda31280007aade1c47def89a7c99"
                }}
                style={styles.ImageBackground_1864_4681}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1864_4688}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_4689}
        />
      </View>
      <View style={styles.View_1864_4707} />
      <View style={styles.View_1864_4708}>
        <Text style={styles.Text_1864_4708}>Account ID:</Text>
      </View>
      <View style={styles.View_1864_4709}>
        <Text style={styles.Text_1864_4709}>Level:</Text>
      </View>
      <View style={styles.View_1864_4710}>
        <Text style={styles.Text_1864_4710}>423665935</Text>
      </View>
      <View style={styles.View_1864_4711}>
        <View style={styles.View_1864_4712} />
        <View style={styles.View_1864_4713}>
          <Text style={styles.Text_1864_4713}>?</Text>
        </View>
        <View style={styles.View_1864_4714}>
          <Text style={styles.Text_1864_4714}>Registered user</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2b7/ee08/cd3d70c117f30a42004b9fa334f3970f"
        }}
        style={styles.ImageBackground_1864_4715}
      />
      <View style={styles.View_1864_4716}>
        <Text style={styles.Text_1864_4716}>CPE Setting</Text>
      </View>
      <View style={styles.View_1864_4717} />
      <View style={styles.View_1864_4718}>
        <Text style={styles.Text_1864_4718}>Home</Text>
      </View>
      <View style={styles.View_1864_4719}>
        <Text style={styles.Text_1864_4719}>Packages</Text>
      </View>
      <View style={styles.View_1864_4720}>
        <Text style={styles.Text_1864_4720}>News</Text>
      </View>
      <View style={styles.View_1864_4721}>
        <Text style={styles.Text_1864_4721}>Account</Text>
      </View>
      <View style={styles.View_1864_4722}>
        <Text style={styles.Text_1864_4722}>FAQs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b27/8561/ddf7806f2e5a4888b1b7365f82927572"
        }}
        style={styles.ImageBackground_1864_4723}
      />
      <View style={styles.View_1864_4744}>
        <Text style={styles.Text_1864_4744}>Eng</Text>
      </View>
      <View style={styles.View_1864_4745}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_4746}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_4748}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_4749}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8664/2f77/3b4b2efcd01d9bb8d7b5fde63bc8001c"
        }}
        style={styles.ImageBackground_1864_4750}
      />
      <View style={styles.View_1864_4751} />
      <View style={styles.View_1864_4752}>
        <View style={styles.View_1864_4753} />
        <View style={styles.View_1864_4754} />
        <View style={styles.View_1864_4755} />
        <View style={styles.View_1864_4756} />
        <View style={styles.View_1864_4757}>
          <Text style={styles.Text_1864_4757}>Type old password</Text>
        </View>
        <View style={styles.View_1864_4758}>
          <Text style={styles.Text_1864_4758}>Type new password </Text>
        </View>
        <View style={styles.View_1864_4759}>
          <Text style={styles.Text_1864_4759}>Retype new password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd6/14ec/0293ed228f974e9ea575a018311e2b27"
          }}
          style={styles.ImageBackground_1864_4760}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd6/14ec/0293ed228f974e9ea575a018311e2b27"
          }}
          style={styles.ImageBackground_1864_4761}
        />
        <View style={styles.View_1864_4762}>
          <Text style={styles.Text_1864_4762}>Change wifi password</Text>
        </View>
        <View style={styles.View_1864_4763}>
          <View style={styles.View_1864_4764} />
          <View style={styles.View_1864_4765}>
            <Text style={styles.Text_1864_4765}>Save</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140.0273224043716%") },
  View_1864_4614: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("29.23497267759563%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_4615: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.263888888888886%"),
    top: hp("29.23497267759563%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_4616: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.930555555555555%"),
    top: hp("31.693989071038253%")
  },
  ImageBackground_1864_4617: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.93055555555556%"),
    top: hp("31.693989071038253%")
  },
  ImageBackground_1864_4618: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.76388888888889%"),
    top: hp("33.33333333333333%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_4619: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("33.33333333333333%"),
    resizeMode: "cover"
  },
  View_1864_4620: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.208333333333332%"),
    top: hp("35.79234972677596%"),
    justifyContent: "flex-start"
  },
  Text_1864_4620: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4621: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.208333333333336%"),
    top: hp("35.79234972677596%"),
    justifyContent: "flex-start"
  },
  Text_1864_4621: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4622: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.208333333333332%"),
    top: hp("31.693989071038253%"),
    justifyContent: "flex-start"
  },
  Text_1864_4622: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4623: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.208333333333336%"),
    top: hp("31.693989071038253%"),
    justifyContent: "flex-start"
  },
  Text_1864_4623: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4624: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.208333333333332%"),
    top: hp("39.75409836065574%"),
    justifyContent: "flex-start"
  },
  Text_1864_4624: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4625: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.208333333333336%"),
    top: hp("39.75409836065574%"),
    justifyContent: "flex-start"
  },
  Text_1864_4625: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4626: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.23611111111111%"),
    top: hp("31.693989071038253%"),
    justifyContent: "flex-start"
  },
  Text_1864_4626: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4627: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.236111111111114%"),
    top: hp("31.693989071038253%"),
    justifyContent: "flex-start"
  },
  Text_1864_4627: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4628: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.86111111111111%"),
    top: hp("35.79234972677596%"),
    justifyContent: "flex-start"
  },
  Text_1864_4628: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4629: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.861111111111114%"),
    top: hp("35.79234972677596%"),
    justifyContent: "flex-start"
  },
  Text_1864_4629: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4630: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.51388888888889%"),
    top: hp("39.75409836065574%")
  },
  View_1864_4631: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_4631: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4632: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.513888888888886%"),
    top: hp("39.75409836065574%")
  },
  View_1864_4633: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_4633: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4634: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.819444444444443%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_4635: {
    width: wp("1.3858695824941%"),
    height: hp("2.738180316862513%"),
    top: hp("-0.006003457991802463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_4636: {
    width: wp("1.3858695824941%"),
    height: hp("2.738180316862513%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4639: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.81944444444444%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_4640: {
    width: wp("1.3858695824941%"),
    height: hp("2.738180316862513%"),
    top: hp("-0.006003457991802463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_4641: {
    width: wp("1.3858695824941%"),
    height: hp("2.738180316862513%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4644: {
    width: wp("11.180555555555555%"),
    minWidth: wp("11.180555555555555%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.208333333333332%"),
    top: hp("44.53551912568306%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_4645: {
    width: wp("11.180555555555555%"),
    minWidth: wp("11.180555555555555%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.208333333333336%"),
    top: hp("44.53551912568306%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_4646: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.90277777777778%"),
    top: hp("45.49180327868852%"),
    justifyContent: "center"
  },
  Text_1864_4646: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4647: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.90277777777778%"),
    top: hp("45.49180327868852%"),
    justifyContent: "center"
  },
  Text_1864_4647: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4648: {
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
  View_1864_4649: {
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
  View_1864_4650: {
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
  View_1864_4651: {
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
  Text_1864_4651: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4652: {
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
  ImageBackground_1864_4653: {
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
  View_1864_4654: {
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
  Text_1864_4654: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4655: {
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
  Text_1864_4655: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_4656: {
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
  View_1864_4657: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.76388888888889%"),
    top: hp("5.566939890710401%")
  },
  View_1864_4658: {
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
  ImageBackground_1864_4659: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6654499658469888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.056287977430557135%")
  },
  View_1864_4662: {
    width: wp("1.6910821861690943%"),
    minWidth: wp("1.6910821861690943%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28564453125%"),
    top: hp("5.566939890710401%")
  },
  View_1864_4663: {
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
  View_1864_4664: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.22172771516393652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4665: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_4666: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4669: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.80712890625%"),
    top: hp("5.566939890710401%")
  },
  View_1864_4670: {
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
  View_1864_4671: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_4672: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4675: {
    width: wp("1.6910918553670249%"),
    minWidth: wp("1.6910918553670249%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.32874891493056%"),
    top: hp("5.566939890710401%")
  },
  View_1864_4676: {
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
  ImageBackground_1864_4677: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4678: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.85064019097223%"),
    top: hp("5.566939890710401%")
  },
  View_1864_4679: {
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
  View_1864_4680: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.17023138661201642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11271158854165719%")
  },
  ImageBackground_1864_4681: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4688: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("128.4153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_4689: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_4707: {
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
  View_1864_4708: {
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
  Text_1864_4708: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4709: {
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
  Text_1864_4709: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4710: {
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
  Text_1864_4710: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4711: {
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
  View_1864_4712: {
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
  View_1864_4713: {
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
  Text_1864_4713: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4714: {
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
  Text_1864_4714: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_4715: {
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
  View_1864_4716: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("23.633879781420767%"),
    justifyContent: "flex-start"
  },
  Text_1864_4716: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4717: {
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
  View_1864_4718: {
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
  Text_1864_4718: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4719: {
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
  Text_1864_4719: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4720: {
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
  Text_1864_4720: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4721: {
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
  Text_1864_4721: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4722: {
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
  Text_1864_4722: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_4723: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_4744: {
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
  Text_1864_4744: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4745: {
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
  ImageBackground_1864_4746: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_4748: {
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
  ImageBackground_1864_4749: {
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
  ImageBackground_1864_4750: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%")
  },
  View_1864_4751: {
    width: wp("100.06944444444446%"),
    minWidth: wp("100.06944444444446%"),
    height: hp("140.0273224043716%"),
    minHeight: hp("140.0273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1864_4752: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    height: hp("55.32786885245902%"),
    minHeight: hp("55.32786885245902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.833333333333336%"),
    top: hp("33.60655737704918%")
  },
  View_1864_4753: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    height: hp("55.32786885245902%"),
    minHeight: hp("55.32786885245902%"),
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
  View_1864_4754: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7083333333333357%"),
    top: hp("12.978142076502735%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_4755: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7083333333333357%"),
    top: hp("24.86338797814208%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_4756: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: hp("36.748633879781416%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_4757: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: hp("9.42622950819672%"),
    justifyContent: "center"
  },
  Text_1864_4757: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4758: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: hp("21.31147540983607%"),
    justifyContent: "center"
  },
  Text_1864_4758: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4759: {
    width: wp("9.51388888888889%"),
    minWidth: wp("9.51388888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8472222222222214%"),
    top: hp("33.19672131147541%"),
    justifyContent: "center"
  },
  Text_1864_4759: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_4760: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777146%"),
    top: hp("7.240437158469952%")
  },
  ImageBackground_1864_4761: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.94535519125683%")
  },
  View_1864_4762: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_1864_4762: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_4763: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.694444444444443%"),
    top: hp("47.6775956284153%")
  },
  View_1864_4764: {
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
  View_1864_4765: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666643%"),
    top: hp("1.092896174863398%"),
    justifyContent: "center"
  },
  Text_1864_4765: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
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
