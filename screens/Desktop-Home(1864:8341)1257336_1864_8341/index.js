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
      <View style={styles.View_1864_8350} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_8351}
      />
      <View style={styles.View_1864_8352}>
        <Text style={styles.Text_1864_8352}>423665935</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5121/cf5b/9f99cb6b2c6b312b88eaf3a8dc8c95c7"
        }}
        style={styles.ImageBackground_1864_8353}
      />
      <View style={styles.View_1864_8354} />
      <View style={styles.View_1864_8355}>
        <Text style={styles.Text_1864_8355}>Balance : 100,000 Ks</Text>
      </View>
      <View style={styles.View_1864_8356} />
      <View style={styles.View_1864_8357}>
        <Text style={styles.Text_1864_8357}>Maximum speed</Text>
      </View>
      <View style={styles.View_1864_8358}>
        <Text style={styles.Text_1864_8358}>10Mbps</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672e/54cc/703e70ec85130415365dea83fc1ad7fa"
        }}
        style={styles.ImageBackground_1864_8359}
      />
      <View style={styles.View_1864_8360} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_8361}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_8362}
      />
      <View style={styles.View_1864_8363}>
        <Text style={styles.Text_1864_8363}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_8364}>
        <Text style={styles.Text_1864_8364}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_8365}>
        <Text style={styles.Text_1864_8365}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_8366}>
        <Text style={styles.Text_1864_8366}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_8367}>
        <Text style={styles.Text_1864_8367}>11 MB</Text>
      </View>
      <View style={styles.View_1864_8368}>
        <Text style={styles.Text_1864_8368}>11 MB</Text>
      </View>
      <View style={styles.View_1864_8369}>
        <Text style={styles.Text_1864_8369}>2020-02-01</Text>
      </View>
      <View style={styles.View_1864_8370}>
        <Text style={styles.Text_1864_8370}>2020-02-01</Text>
      </View>
      <View style={styles.View_1864_8371}>
        <Text style={styles.Text_1864_8371}>Data 3 GB</Text>
      </View>
      <View style={styles.View_1864_8372}>
        <Text style={styles.Text_1864_8372}>Data 1 GB</Text>
      </View>
      <View style={styles.View_1864_8373}>
        <Text style={styles.Text_1864_8373}>Active Packs (3)</Text>
      </View>
      <View style={styles.View_1864_8374}>
        <Text style={styles.Text_1864_8374}>Internet</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6cc/9565/caecd205e18a3af9e860b6a4f85cc1f9"
        }}
        style={styles.ImageBackground_1864_8375}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/1f9a/fb0e0f3445d26610c6d076f222ca6c9a"
        }}
        style={styles.ImageBackground_1864_8376}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/1f9a/fb0e0f3445d26610c6d076f222ca6c9a"
        }}
        style={styles.ImageBackground_1864_8377}
      />
      <View style={styles.View_1864_8378} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a9/ae02/e884897105804dcc81810006e5be6c92"
        }}
        style={styles.ImageBackground_1864_8379}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6833/3d7b/b3640942fa7182bc37317bd23df7e8db"
        }}
        style={styles.ImageBackground_1864_8380}
      />
      <View style={styles.View_1864_8381} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e58/f569/19681664b58ae63f719d2370fb079403"
        }}
        style={styles.ImageBackground_1864_8382}
      />
      <View style={styles.View_1864_8383}>
        <Text style={styles.Text_1864_8383}>Loan Repayment</Text>
      </View>
      <View style={styles.View_1864_8384}>
        <Text style={styles.Text_1864_8384}>
          Total Repayment Amount : 444,000 Ks
        </Text>
      </View>
      <View style={styles.View_1864_8385}>
        <Text style={styles.Text_1864_8385}>Paid : 74,000 Ks</Text>
      </View>
      <View style={styles.View_1864_8386} />
      <View style={styles.View_1864_8387}>
        <Text style={styles.Text_1864_8387}>Home</Text>
      </View>
      <View style={styles.View_1864_8388}>
        <Text style={styles.Text_1864_8388}>Packages</Text>
      </View>
      <View style={styles.View_1864_8389}>
        <Text style={styles.Text_1864_8389}>News</Text>
      </View>
      <View style={styles.View_1864_8390}>
        <Text style={styles.Text_1864_8390}>Account</Text>
      </View>
      <View style={styles.View_1864_8391}>
        <Text style={styles.Text_1864_8391}>FAQs</Text>
      </View>
      <View style={styles.View_1864_8392}>
        <Text style={styles.Text_1864_8392}>Eng</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a0/6689/02fc154db7272f3035351e6858c578fd"
        }}
        style={styles.ImageBackground_1864_8393}
      />
      <View style={styles.View_1864_8414}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_8415}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_8417}
      />
      <View style={styles.View_1864_8418} />
      <View style={styles.View_1864_8419} />
      <View style={styles.View_1864_8420}>
        <Text style={styles.Text_1864_8420}>
          Myanmar Net © 2021. All Rights Reserved.
        </Text>
      </View>
      <View style={styles.View_1864_8421}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
          }}
          style={styles.ImageBackground_1864_8422}
        />
        <View style={styles.View_1864_8423}>
          <Text style={styles.Text_1864_8423}>
            09-765338440 (9:00 AM to 7:30 PM Everyday)
          </Text>
        </View>
        <View style={styles.View_1864_8424}>
          <Text style={styles.Text_1864_8424}>
            No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
          }}
          style={styles.ImageBackground_1864_8425}
        />
      </View>
      <View style={styles.View_1864_8426}>
        <View style={styles.View_1864_8427}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
            }}
            style={styles.ImageBackground_1864_8428}
          />
        </View>
      </View>
      <View style={styles.View_1864_8431}>
        <View style={styles.View_1864_8432} />
        <View style={styles.View_1864_8433}>
          <View style={styles.View_1864_8434}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
              }}
              style={styles.ImageBackground_1864_8435}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_8438}>
        <View style={styles.View_1864_8439} />
        <View style={styles.View_1864_8440}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
            }}
            style={styles.ImageBackground_1864_8441}
          />
        </View>
      </View>
      <View style={styles.View_1864_8444}>
        <View style={styles.View_1864_8445} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
          }}
          style={styles.ImageBackground_1864_8446}
        />
      </View>
      <View style={styles.View_1864_8447}>
        <View style={styles.View_1864_8448}>
          <View style={styles.View_1864_8449}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/706d/9cb8/5d037e7bdaf90d0e59934c83a7830364"
              }}
              style={styles.ImageBackground_1864_8450}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_8457}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/9499/bac441cb005bd828afa02be8ddc83cad"
          }}
          style={styles.ImageBackground_1864_8458}
        />
      </View>
      <View style={styles.View_1864_8476} />
      <View style={styles.View_1864_8477}>
        <View style={styles.View_1864_8478}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd13/907f/8fe5164501e59a46ba41fd61456a886c"
            }}
            style={styles.ImageBackground_1864_8479}
          />
        </View>
      </View>
      <View style={styles.View_1864_8503}>
        <View style={styles.View_1864_8504}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd13/907f/8fe5164501e59a46ba41fd61456a886c"
            }}
            style={styles.ImageBackground_1864_8505}
          />
        </View>
      </View>
      <View style={styles.View_1864_8529}>
        <Text style={styles.Text_1864_8529}>Account Number</Text>
      </View>
      <View style={styles.View_1864_8530} />
      <View style={styles.View_1864_8531}>
        <Text style={styles.Text_1864_8531}>Top up</Text>
      </View>
      <View style={styles.View_1864_8532}>
        <Text style={styles.Text_1864_8532}>xxxx-xxxx-xxxx-xxxx</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e96/1d78/658f6050049ee0e6d9912e8da1a81eaa"
        }}
        style={styles.ImageBackground_1864_8533}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e96/1d78/658f6050049ee0e6d9912e8da1a81eaa"
        }}
        style={styles.ImageBackground_1864_8534}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a06/fc18/31f364592b359e5fa495bf8b782634a2"
        }}
        style={styles.ImageBackground_1864_8535}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3985/0fe9/5956d327c08a6698537050d1ed1e7efe"
        }}
        style={styles.ImageBackground_1864_8540}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ab/5a9a/106fbc3c571974eb3b6fde115921fb8a"
        }}
        style={styles.ImageBackground_1864_8541}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b259/65cd/8db78b44314cf81f471413fd52c5b53f"
        }}
        style={styles.ImageBackground_1864_8542}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/b369/5f7db112830681172f117adc3bd909ea"
        }}
        style={styles.ImageBackground_1864_8543}
      />
      <View style={styles.View_1864_8544} />
      <View style={styles.View_1864_8545} />
      <View style={styles.View_1864_8546} />
      <View style={styles.View_1864_8547}>
        <Text style={styles.Text_1864_8547}>Download Myanmar Net app</Text>
      </View>
      <View style={styles.View_1864_8548}>
        <Text style={styles.Text_1864_8548}>Download Myanmar Cast app</Text>
      </View>
      <View style={styles.View_1864_8549}>
        <View style={styles.View_1864_8550}>
          <Text style={styles.Text_1864_8550}>Download My Canal app</Text>
        </View>
        <View style={styles.View_1864_8551}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee49/1937/d705603dbcbe65d3e21dcf89a704471a"
            }}
            style={styles.ImageBackground_1864_8552}
          />
        </View>
        <View style={styles.View_1864_8556}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dbb/6763/de8b14792f7ef6f386442c431580db27"
            }}
            style={styles.ImageBackground_1864_8557}
          />
        </View>
      </View>
      <View style={styles.View_1864_8575}>
        <View style={styles.View_1864_8576}>
          <View style={styles.View_1864_8577}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_8578}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_8579}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_8580}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_8581}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_8582}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5248/1815/d7c9b3f2efdb7d4687466ab00fd6dfbd"
              }}
              style={styles.ImageBackground_1864_8583}
            />
          </View>
        </View>
        <View style={styles.View_1864_8592}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_8593}
          />
        </View>
        <View style={styles.View_1864_8597}>
          <View style={styles.View_1864_8598}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_8599}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_8600}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bd/dda8/3a91b8d0fbcdb7d2d7a6254666cb3097"
              }}
              style={styles.ImageBackground_1864_8601}
            />
          </View>
        </View>
        <View style={styles.View_1864_8610}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dbb/6763/de8b14792f7ef6f386442c431580db27"
            }}
            style={styles.ImageBackground_1864_8611}
          />
        </View>
      </View>
      <View style={styles.View_1864_8629}>
        <View style={styles.View_1864_8630}>
          <View style={styles.View_1864_8631}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_8632}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_8633}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_8634}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_8635}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_8636}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5248/1815/d7c9b3f2efdb7d4687466ab00fd6dfbd"
              }}
              style={styles.ImageBackground_1864_8637}
            />
          </View>
        </View>
        <View style={styles.View_1864_8646}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_8647}
          />
        </View>
        <View style={styles.View_1864_8651}>
          <View style={styles.View_1864_8652}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_8653}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_8654}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bd/dda8/3a91b8d0fbcdb7d2d7a6254666cb3097"
              }}
              style={styles.ImageBackground_1864_8655}
            />
          </View>
        </View>
        <View style={styles.View_1864_8664}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dbb/6763/de8b14792f7ef6f386442c431580db27"
            }}
            style={styles.ImageBackground_1864_8665}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/0c01/88539a39a3670d9f8662e790074e8512"
        }}
        style={styles.ImageBackground_1864_8683}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("154.91803278688525%") },
  View_1864_8350: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("125.13661202185793%"),
    minHeight: hp("125.13661202185793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  ImageBackground_1864_8351: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.25%"),
    top: hp("12.978142076502733%"),
    resizeMode: "cover"
  },
  View_1864_8352: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("13.797814207650273%"),
    justifyContent: "flex-start"
  },
  Text_1864_8352: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8353: {
    width: wp("1.8057105276319714%"),
    minWidth: wp("1.8057105276319714%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("13.25136612021858%"),
    resizeMode: "cover"
  },
  View_1864_8354: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("18.579234972677597%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_8355: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("20.491803278688526%"),
    justifyContent: "flex-start"
  },
  Text_1864_8355: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8356: {
    width: wp("40.97222222222222%"),
    minWidth: wp("40.97222222222222%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("18.442622950819672%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_8357: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.166666666666664%"),
    top: hp("20.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1864_8357: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8358: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.31944444444444%"),
    top: hp("20.491803278688526%"),
    justifyContent: "flex-start"
  },
  Text_1864_8358: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8359: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("20.3551912568306%"),
    resizeMode: "cover"
  },
  View_1864_8360: {
    width: wp("40.97222222222222%"),
    minWidth: wp("40.97222222222222%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("26.639344262295083%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_8361: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.916666666666664%"),
    top: hp("34.83606557377049%")
  },
  ImageBackground_1864_8362: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.97222222222223%"),
    top: hp("34.83606557377049%")
  },
  View_1864_8363: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("37.43169398907104%"),
    justifyContent: "flex-start"
  },
  Text_1864_8363: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8364: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("37.43169398907104%"),
    justifyContent: "flex-start"
  },
  Text_1864_8364: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8365: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("40.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_1864_8365: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8366: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("40.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_1864_8366: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8367: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.88888888888889%"),
    top: hp("37.56830601092896%"),
    justifyContent: "flex-start"
  },
  Text_1864_8367: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8368: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.94444444444444%"),
    top: hp("37.56830601092896%"),
    justifyContent: "flex-start"
  },
  Text_1864_8368: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8369: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80555555555556%"),
    top: hp("40.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_1864_8369: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8370: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.86111111111111%"),
    top: hp("40.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_1864_8370: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8371: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("34.2896174863388%"),
    justifyContent: "flex-start"
  },
  Text_1864_8371: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8372: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("34.2896174863388%"),
    justifyContent: "flex-start"
  },
  Text_1864_8372: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8373: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("29.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_1864_8373: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8374: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.90277777777778%"),
    top: hp("13.387978142076504%"),
    justifyContent: "flex-start"
  },
  Text_1864_8374: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8375: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("52.73241553801656%"),
    minHeight: hp("52.73241553801656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.40972222222222%"),
    top: hp("13.387978142076504%")
  },
  ImageBackground_1864_8376: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8.343138460253106%"),
    minHeight: hp("8.343138460253106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.02777777777777%"),
    top: hp("34.426362918374316%")
  },
  ImageBackground_1864_8377: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8.343138460253106%"),
    minHeight: hp("8.343138460253106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.80555555555556%"),
    top: hp("34.56297494023224%")
  },
  View_1864_8378: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%"),
    top: hp("34.01639344262295%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1864_8379: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.81944444444444%"),
    top: hp("36.885245901639344%")
  },
  ImageBackground_1864_8380: {
    width: wp("0.5555555555555556%"),
    height: hp("1.873536318377719%"),
    top: hp("37.56830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.375%")
  },
  View_1864_8381: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("53.14207650273224%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_8382: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.31944444444444%"),
    top: hp("59.15300546448088%")
  },
  View_1864_8383: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("55.32786885245902%"),
    justifyContent: "flex-start"
  },
  Text_1864_8383: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8384: {
    width: wp("16.52777777777778%"),
    minWidth: wp("16.52777777777778%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("59.56284153005464%"),
    justifyContent: "flex-start"
  },
  Text_1864_8384: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8385: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("62.568306010928964%"),
    justifyContent: "flex-start"
  },
  Text_1864_8385: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8386: {
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
  View_1864_8387: {
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
  Text_1864_8387: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8388: {
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
  Text_1864_8388: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8389: {
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
  Text_1864_8389: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8390: {
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
  Text_1864_8390: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8391: {
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
  Text_1864_8391: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8392: {
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
  Text_1864_8392: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8393: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_8414: {
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
  ImageBackground_1864_8415: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8417: {
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
  View_1864_8418: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("135.38251366120218%"),
    backgroundColor: "rgba(54, 54, 54, 1)"
  },
  View_1864_8419: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("150%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_8420: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.15277777777778%"),
    top: hp("151.50273224043715%"),
    justifyContent: "flex-start"
  },
  Text_1864_8420: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8421: {
    width: wp("29.097222222222225%"),
    minWidth: wp("29.097222222222225%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.694444444444445%"),
    top: hp("139.4808743169399%")
  },
  ImageBackground_1864_8422: {
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
  View_1864_8423: {
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
  Text_1864_8423: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8424: {
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
  Text_1864_8424: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8425: {
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
  View_1864_8426: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.76388888888889%"),
    top: hp("140.94958696209017%")
  },
  View_1864_8427: {
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
  ImageBackground_1864_8428: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653165556693921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05635579427084281%")
  },
  View_1864_8431: {
    width: wp("1.6910821861690943%"),
    minWidth: wp("1.6910821861690943%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28564453125%"),
    top: hp("140.94958696209017%")
  },
  View_1864_8432: {
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
  View_1864_8433: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.2217277151639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8434: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8435: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8438: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.80712890625%"),
    top: hp("140.94958696209017%")
  },
  View_1864_8439: {
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
  View_1864_8440: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8441: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8444: {
    width: wp("1.6910918553670249%"),
    minWidth: wp("1.6910918553670249%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.32874891493056%"),
    top: hp("140.94958696209017%")
  },
  View_1864_8445: {
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
  ImageBackground_1864_8446: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027146184%")
  },
  View_1864_8447: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.85064019097223%"),
    top: hp("140.94958696209017%")
  },
  View_1864_8448: {
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
  View_1864_8449: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.1700979764344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11277940538194287%")
  },
  ImageBackground_1864_8450: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8457: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("143.30601092896177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_8458: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8476: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("26.775956284153008%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_8477: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.625%"),
    top: hp("31.557377049180328%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_8478: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8479: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8503: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.625%"),
    top: hp("39.34426229508197%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_8504: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8505: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8529: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.305555555555555%"),
    top: hp("31.010928961748636%"),
    justifyContent: "center"
  },
  Text_1864_8529: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8530: {
    width: wp("6.319444444444445%"),
    minWidth: wp("6.319444444444445%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("44.53551912568306%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_8531: {
    width: wp("3.4027777777777777%"),
    minWidth: wp("3.4027777777777777%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.458333333333332%"),
    top: hp("45.76502732240437%"),
    justifyContent: "center"
  },
  Text_1864_8531: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8532: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("38.9344262295082%"),
    justifyContent: "center"
  },
  Text_1864_8532: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_8533: {
    width: wp("25.694444444444443%"),
    minWidth: wp("25.694444444444443%"),
    height: hp("0.000004197451739433309%"),
    minHeight: hp("0.000004197451739433309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("34.2896174863388%")
  },
  ImageBackground_1864_8534: {
    width: wp("25.694444444444443%"),
    minWidth: wp("25.694444444444443%"),
    height: hp("0.000004197451739433309%"),
    minHeight: hp("0.000004197451739433309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("42.07650273224044%")
  },
  ImageBackground_1864_8535: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.91666666666667%"),
    top: hp("120.21857923497268%")
  },
  ImageBackground_1864_8540: {
    width: wp("17.430555555555554%"),
    minWidth: wp("17.430555555555554%"),
    height: hp("13.71584720298892%"),
    minHeight: hp("13.71584720298892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("103.68852459016394%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_8541: {
    width: wp("17.430555555555554%"),
    minWidth: wp("17.430555555555554%"),
    height: hp("13.71584720298892%"),
    minHeight: hp("13.71584720298892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.013888888888886%"),
    top: hp("103.68852459016394%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_8542: {
    width: wp("17.430555555555554%"),
    minWidth: wp("17.430555555555554%"),
    height: hp("13.71584720298892%"),
    minHeight: hp("13.71584720298892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.763888888888886%"),
    top: hp("103.68852459016394%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_8543: {
    width: wp("17.430555555555554%"),
    minWidth: wp("17.430555555555554%"),
    height: hp("13.71584720298892%"),
    minHeight: hp("13.71584720298892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("103.68852459016394%"),
    resizeMode: "cover"
  },
  View_1864_8544: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("71.58469945355192%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_8545: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.19444444444444%"),
    top: hp("71.58469945355192%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_8546: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.19444444444444%"),
    top: hp("71.58469945355192%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_8547: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.555555555555554%"),
    top: hp("74.31693989071039%"),
    justifyContent: "flex-start"
  },
  Text_1864_8547: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8548: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.34722222222222%"),
    top: hp("74.31693989071039%"),
    justifyContent: "flex-start"
  },
  Text_1864_8548: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8549: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.76388888888889%"),
    top: hp("74.31693989071039%")
  },
  View_1864_8550: {
    width: wp("6.805555555555555%"),
    minWidth: wp("6.805555555555555%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333343%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_8550: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_8551: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777771%")
  },
  ImageBackground_1864_8552: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8556: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8557: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8575: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.76388888888889%"),
    top: hp("83.19672131147541%")
  },
  View_1864_8576: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8577: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8578: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8579: {
    width: wp("0.6639766693115234%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1921533469945302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7992485894097214%")
  },
  ImageBackground_1864_8580: {
    width: wp("0.6532165739271376%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.953925461065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7992485894097214%")
  },
  ImageBackground_1864_8581: {
    width: wp("0.14038824372821385%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.953925461065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6103108723958321%")
  },
  ImageBackground_1864_8582: {
    width: wp("0.14035292797618443%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.953925461065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.511800130208332%")
  },
  ImageBackground_1864_8583: {
    width: wp("3.249186409844292%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2826063368055536%")
  },
  View_1864_8592: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  ImageBackground_1864_8593: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8597: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  View_1864_8598: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8599: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8600: {
    width: wp("1.1226296424865723%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5700276692708286%")
  },
  ImageBackground_1864_8601: {
    width: wp("3.2491593890719943%"),
    height: hp("1.132476134378402%"),
    top: hp("1.9209731471994473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2826063368055536%")
  },
  View_1864_8610: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8611: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8629: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.763888888888886%"),
    top: hp("83.19672131147541%")
  },
  View_1864_8630: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8631: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8632: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8633: {
    width: wp("0.6639766693115234%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1921533469945302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7992485894097285%")
  },
  ImageBackground_1864_8634: {
    width: wp("0.6532165739271376%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.953925461065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7992485894097285%")
  },
  ImageBackground_1864_8635: {
    width: wp("0.14038824372821385%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.953925461065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6103108723958357%")
  },
  ImageBackground_1864_8636: {
    width: wp("0.14035292797618443%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.953925461065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5118001302083357%")
  },
  ImageBackground_1864_8637: {
    width: wp("3.249186409844292%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.282606336805557%")
  },
  View_1864_8646: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  ImageBackground_1864_8647: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_8651: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  View_1864_8652: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8653: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8654: {
    width: wp("1.1226296424865723%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5700276692708357%")
  },
  ImageBackground_1864_8655: {
    width: wp("3.2491593890719943%"),
    height: hp("1.132476134378402%"),
    top: hp("1.9209731471994473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.282606336805557%")
  },
  View_1864_8664: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8665: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_8683: {
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
