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
      <View style={styles.View_1864_9496} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_9497}
      />
      <View style={styles.View_1864_9498}>
        <Text style={styles.Text_1864_9498}>423665935</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5121/cf5b/9f99cb6b2c6b312b88eaf3a8dc8c95c7"
        }}
        style={styles.ImageBackground_1864_9499}
      />
      <View style={styles.View_1864_9500} />
      <View style={styles.View_1864_9501}>
        <Text style={styles.Text_1864_9501}>Balance : 100,000 Ks</Text>
      </View>
      <View style={styles.View_1864_9502} />
      <View style={styles.View_1864_9503}>
        <Text style={styles.Text_1864_9503}>Maximum speed</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672e/54cc/703e70ec85130415365dea83fc1ad7fa"
        }}
        style={styles.ImageBackground_1864_9504}
      />
      <View style={styles.View_1864_9505} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_9506}
      />
      <View style={styles.View_1864_9507}>
        <Text style={styles.Text_1864_9507}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_9508}>
        <Text style={styles.Text_1864_9508}>Remaining D</Text>
      </View>
      <View style={styles.View_1864_9509}>
        <Text style={styles.Text_1864_9509}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_9510}>
        <Text style={styles.Text_1864_9510}>Expirat</Text>
      </View>
      <View style={styles.View_1864_9511}>
        <Text style={styles.Text_1864_9511}>11 MB</Text>
      </View>
      <View style={styles.View_1864_9512}>
        <Text style={styles.Text_1864_9512}>2020-02-01</Text>
      </View>
      <View style={styles.View_1864_9513}>
        <Text style={styles.Text_1864_9513}>Data 3 GB</Text>
      </View>
      <View style={styles.View_1864_9514}>
        <Text style={styles.Text_1864_9514}>Data 1 GB</Text>
      </View>
      <View style={styles.View_1864_9515}>
        <Text style={styles.Text_1864_9515}>Active Packs (3)</Text>
      </View>
      <View style={styles.View_1864_9516}>
        <Text style={styles.Text_1864_9516}>Internet</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/1f9a/fb0e0f3445d26610c6d076f222ca6c9a"
        }}
        style={styles.ImageBackground_1864_9517}
      />
      <View style={styles.View_1864_9518} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a9/ae02/e884897105804dcc81810006e5be6c92"
        }}
        style={styles.ImageBackground_1864_9519}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6833/3d7b/b3640942fa7182bc37317bd23df7e8db"
        }}
        style={styles.ImageBackground_1864_9520}
      />
      <View style={styles.View_1864_9521}>
        <Text style={styles.Text_1864_9521}>10Mbps</Text>
      </View>
      <View style={styles.View_1864_9522} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b586/4b9d/4a4b6c73f84b52262baa847694714dbd"
        }}
        style={styles.ImageBackground_1864_9523}
      />
      <View style={styles.View_1864_9524}>
        <Text style={styles.Text_1864_9524}>Loan Repayment</Text>
      </View>
      <View style={styles.View_1864_9525}>
        <Text style={styles.Text_1864_9525}>
          Total Repayment Amount : 444,000 Ks
        </Text>
      </View>
      <View style={styles.View_1864_9526}>
        <Text style={styles.Text_1864_9526}>Paid : 74,000 Ks</Text>
      </View>
      <View style={styles.View_1864_9527} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_9528}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405b/bced/393d0fa7a0a3d9b93e0c7dbcbcf48c4a"
        }}
        style={styles.ImageBackground_1864_9532}
      />
      <View style={styles.View_1864_9553}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_9554}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_9556}
      />
      <View style={styles.View_1864_9557} />
      <View style={styles.View_1864_9558}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5345/6e93/13df8dfc4c0b426c51b83472e8c6402e"
          }}
          style={styles.ImageBackground_1864_9559}
        />
        <View style={styles.View_1864_9560}>
          <Text style={styles.Text_1864_9560}>
            09-765338440 (9:00 AM to 7:30 PM Everyday)
          </Text>
        </View>
      </View>
      <View style={styles.View_1864_9561}>
        <Text style={styles.Text_1864_9561}>
          No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d86a/1c07/7e759385bba8fb770347632d4c30bca9"
        }}
        style={styles.ImageBackground_1864_9562}
      />
      <View style={styles.View_1864_9563} />
      <View style={styles.View_1864_9564}>
        <Text style={styles.Text_1864_9564}>
          Myanmar Net © 2018. All Rights Reserved.
        </Text>
      </View>
      <View style={styles.View_1864_9565}>
        <View style={styles.View_1864_9566}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
            }}
            style={styles.ImageBackground_1864_9567}
          />
        </View>
      </View>
      <View style={styles.View_1864_9570}>
        <View style={styles.View_1864_9571} />
        <View style={styles.View_1864_9572}>
          <View style={styles.View_1864_9573}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
              }}
              style={styles.ImageBackground_1864_9574}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_9577}>
        <View style={styles.View_1864_9578} />
        <View style={styles.View_1864_9579}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
            }}
            style={styles.ImageBackground_1864_9580}
          />
        </View>
      </View>
      <View style={styles.View_1864_9583}>
        <View style={styles.View_1864_9584} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
          }}
          style={styles.ImageBackground_1864_9585}
        />
      </View>
      <View style={styles.View_1864_9586}>
        <View style={styles.View_1864_9587}>
          <View style={styles.View_1864_9588}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/706d/9cb8/5d037e7bdaf90d0e59934c83a7830364"
              }}
              style={styles.ImageBackground_1864_9589}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_9596}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/9499/bac441cb005bd828afa02be8ddc83cad"
          }}
          style={styles.ImageBackground_1864_9597}
        />
      </View>
      <View style={styles.View_1864_9615}>
        <View style={styles.View_1864_9616} />
        <View style={styles.View_1864_9617}>
          <View style={styles.View_1864_9618}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b15e/fa6b/bd85222c8cfaa08971f6a128df444680"
              }}
              style={styles.ImageBackground_1864_9619}
            />
          </View>
        </View>
        <View style={styles.View_1864_9643}>
          <View style={styles.View_1864_9644}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b15e/fa6b/bd85222c8cfaa08971f6a128df444680"
              }}
              style={styles.ImageBackground_1864_9645}
            />
          </View>
        </View>
        <View style={styles.View_1864_9669}>
          <Text style={styles.Text_1864_9669}>Account Number</Text>
        </View>
        <View style={styles.View_1864_9670} />
        <View style={styles.View_1864_9671}>
          <Text style={styles.Text_1864_9671}>Top up</Text>
        </View>
        <View style={styles.View_1864_9672}>
          <Text style={styles.Text_1864_9672}>xxxx-xxxx-xxxx-xxxx</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e32/6d7d/449efc93f78f12d3780824ecf6b440e0"
          }}
          style={styles.ImageBackground_1864_9673}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e32/6d7d/449efc93f78f12d3780824ecf6b440e0"
          }}
          style={styles.ImageBackground_1864_9674}
        />
      </View>
      <View style={styles.View_1864_9675} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a06/fc18/31f364592b359e5fa495bf8b782634a2"
        }}
        style={styles.ImageBackground_1864_9676}
      />
      <View style={styles.View_1864_9681} />
      <View style={styles.View_1864_9682} />
      <View style={styles.View_1864_9683} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3218/d59c/a431d701cca31bb953e33d89b21f69a7"
        }}
        style={styles.ImageBackground_1864_9684}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caff/a1b5/987dec7c7975435bfcaf3100f57b7104"
        }}
        style={styles.ImageBackground_1864_9685}
      />
      <View style={styles.View_1864_9686}>
        <Text style={styles.Text_1864_9686}>Download Myanmar Net app</Text>
      </View>
      <View style={styles.View_1864_9687}>
        <View style={styles.View_1864_9688}>
          <View style={styles.View_1864_9689}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_9690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_9691}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_9692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_9693}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_9694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5248/1815/d7c9b3f2efdb7d4687466ab00fd6dfbd"
              }}
              style={styles.ImageBackground_1864_9695}
            />
          </View>
        </View>
        <View style={styles.View_1864_9704}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_9705}
          />
        </View>
        <View style={styles.View_1864_9709}>
          <View style={styles.View_1864_9710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_9711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_9712}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bd/dda8/3a91b8d0fbcdb7d2d7a6254666cb3097"
              }}
              style={styles.ImageBackground_1864_9713}
            />
          </View>
        </View>
        <View style={styles.View_1864_9722}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d24a/8046/395b7ada0bdfab8c58aa2debb55c3261"
            }}
            style={styles.ImageBackground_1864_9723}
          />
        </View>
      </View>
      <View style={styles.View_1864_9741}>
        <Text style={styles.Text_1864_9741}>Download Myanmar Cast app</Text>
      </View>
      <View style={styles.View_1864_9742}>
        <View style={styles.View_1864_9743}>
          <View style={styles.View_1864_9744}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_9745}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_9746}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_9747}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_9748}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_9749}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5248/1815/d7c9b3f2efdb7d4687466ab00fd6dfbd"
              }}
              style={styles.ImageBackground_1864_9750}
            />
          </View>
        </View>
        <View style={styles.View_1864_9759}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_9760}
          />
        </View>
        <View style={styles.View_1864_9764}>
          <View style={styles.View_1864_9765}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_9766}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_9767}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bd/dda8/3a91b8d0fbcdb7d2d7a6254666cb3097"
              }}
              style={styles.ImageBackground_1864_9768}
            />
          </View>
        </View>
        <View style={styles.View_1864_9777}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d24a/8046/395b7ada0bdfab8c58aa2debb55c3261"
            }}
            style={styles.ImageBackground_1864_9778}
          />
        </View>
      </View>
      <View style={styles.View_1864_9796}>
        <View style={styles.View_1864_9797}>
          <Text style={styles.Text_1864_9797}>Download My Canal app</Text>
        </View>
        <View style={styles.View_1864_9798}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee49/1937/d705603dbcbe65d3e21dcf89a704471a"
            }}
            style={styles.ImageBackground_1864_9799}
          />
        </View>
        <View style={styles.View_1864_9803}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d24a/8046/395b7ada0bdfab8c58aa2debb55c3261"
            }}
            style={styles.ImageBackground_1864_9804}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("254.37158469945356%") },
  View_1864_9496: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("212.1584699453552%"),
    minHeight: hp("212.1584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  ImageBackground_1864_9497: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.09661835748793%"),
    top: hp("12.978142076502733%"),
    resizeMode: "cover"
  },
  View_1864_9498: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("13.524590163934427%"),
    justifyContent: "flex-start"
  },
  Text_1864_9498: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_9499: {
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
  View_1864_9500: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("18.30601092896175%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_9501: {
    width: wp("45.410628019323674%"),
    minWidth: wp("45.410628019323674%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("20.21857923497268%"),
    justifyContent: "flex-start"
  },
  Text_1864_9501: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9502: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("75.27322404371584%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_9503: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.217391304347828%"),
    top: hp("77.3224043715847%"),
    justifyContent: "flex-start"
  },
  Text_1864_9503: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_9504: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("77.3224043715847%"),
    resizeMode: "cover"
  },
  View_1864_9505: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("83.46994535519126%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_9506: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.743961352657006%"),
    top: hp("91.66666666666666%")
  },
  View_1864_9507: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("94.26229508196722%"),
    justifyContent: "flex-start"
  },
  Text_1864_9507: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9508: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.77294685990339%"),
    top: hp("95.49180327868852%"),
    justifyContent: "flex-start"
  },
  Text_1864_9508: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9509: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("97.26775956284153%"),
    justifyContent: "flex-start"
  },
  Text_1864_9509: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9510: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.77294685990339%"),
    top: hp("98.49726775956285%"),
    justifyContent: "flex-start"
  },
  Text_1864_9510: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9511: {
    width: wp("9.903381642512077%"),
    minWidth: wp("9.903381642512077%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.51690821256038%"),
    top: hp("94.39890710382514%"),
    justifyContent: "flex-start"
  },
  Text_1864_9511: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9512: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.270531400966185%"),
    top: hp("97.26775956284153%"),
    justifyContent: "flex-start"
  },
  Text_1864_9512: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9513: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("91.12021857923497%"),
    justifyContent: "flex-start"
  },
  Text_1864_9513: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9514: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.77294685990339%"),
    top: hp("92.34972677595628%"),
    justifyContent: "flex-start"
  },
  Text_1864_9514: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9515: {
    width: wp("28.26086956521739%"),
    minWidth: wp("28.26086956521739%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("86.20218579234972%"),
    justifyContent: "flex-start"
  },
  Text_1864_9515: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9516: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("69.39890710382514%"),
    justifyContent: "flex-start"
  },
  Text_1864_9516: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_9517: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8.343138460253106%"),
    minHeight: hp("8.343138460253106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.3913043478261%"),
    top: hp("92.486405502903%")
  },
  View_1864_9518: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.09178743961353%"),
    top: hp("92.34972677595628%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1864_9519: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.71497584541062%"),
    top: hp("95.21857923497268%")
  },
  ImageBackground_1864_9520: {
    width: wp("1.932367149758454%"),
    height: hp("1.873536318377719%"),
    top: hp("95.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.64734299516908%")
  },
  View_1864_9521: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.81159420289855%"),
    top: hp("78.55191256830601%"),
    justifyContent: "flex-start"
  },
  Text_1864_9521: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9522: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_9523: {
    width: wp("1.4492753623188406%"),
    minWidth: wp("1.4492753623188406%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.09661835748793%"),
    top: hp("58.879781420765035%")
  },
  View_1864_9524: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("55.05464480874317%"),
    justifyContent: "flex-start"
  },
  Text_1864_9524: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9525: {
    width: wp("67.3913043478261%"),
    minWidth: wp("67.3913043478261%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("59.2896174863388%"),
    justifyContent: "flex-start"
  },
  Text_1864_9525: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9526: {
    width: wp("35.748792270531396%"),
    minWidth: wp("35.748792270531396%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("62.295081967213115%"),
    justifyContent: "flex-start"
  },
  Text_1864_9526: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9527: {
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
  ImageBackground_1864_9528: {
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
  ImageBackground_1864_9532: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_9553: {
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
  ImageBackground_1864_9554: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9556: {
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
  View_1864_9557: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("222.40437158469945%"),
    backgroundColor: "rgba(54, 54, 54, 1)"
  },
  View_1864_9558: {
    width: wp("77.23926046620244%"),
    minWidth: wp("77.23926046620244%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.851553064613526%"),
    top: hp("227.18579234972677%")
  },
  ImageBackground_1864_9559: {
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
  View_1864_9560: {
    width: wp("70.21750482384134%"),
    minWidth: wp("70.21750482384134%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.021814613526569%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_9560: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9561: {
    width: wp("82.56610372792119%"),
    minWidth: wp("82.56610372792119%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.82009548611111%"),
    top: hp("231.42076502732237%"),
    justifyContent: "flex-start"
  },
  Text_1864_9561: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_9562: {
    width: wp("4.842586793761323%"),
    minWidth: wp("4.842586793761323%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("231.28415300546447%"),
    resizeMode: "cover"
  },
  View_1864_9563: {
    width: wp("100.2415458937198%"),
    minWidth: wp("100.2415458937198%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("249.45355191256832%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_9564: {
    width: wp("54.96335974062122%"),
    minWidth: wp("54.96335974062122%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.76003925120773%"),
    top: hp("250.95628415300547%"),
    justifyContent: "flex-start"
  },
  Text_1864_9564: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9565: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661837%"),
    top: hp("241.53005464480876%")
  },
  View_1864_9566: {
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
  ImageBackground_1864_9567: {
    width: wp("5.50835973398697%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653832607581762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19602015398550776%")
  },
  View_1864_9570: {
    width: wp("5.882024995370763%"),
    minWidth: wp("5.882024995370763%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.748792270531396%"),
    top: hp("241.66666666666666%")
  },
  View_1864_9571: {
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
  View_1864_9572: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0.2217944202527633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9573: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9574: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9577: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.1214145531401%"),
    top: hp("241.66666666666666%")
  },
  View_1864_9578: {
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
  View_1864_9579: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9580: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9583: {
    width: wp("5.882058627363564%"),
    minWidth: wp("5.882058627363564%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("241.66666666666666%")
  },
  View_1864_9584: {
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
  ImageBackground_1864_9585: {
    width: wp("5.881911660162147%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724047055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00023588466183355195%")
  },
  View_1864_9586: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94685990338165%"),
    top: hp("241.66666666666666%")
  },
  View_1864_9587: {
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
  View_1864_9588: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.1700979764344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.39227619263283486%")
  },
  ImageBackground_1864_9589: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9596: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("242.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.85024154589372%")
  },
  ImageBackground_1864_9597: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9615: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("26.50273224043716%")
  },
  View_1864_9616: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_9617: {
    width: wp("4.291652826871273%"),
    minWidth: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.76019965277777%"),
    top: hp("4.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_9618: {
    width: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9619: {
    width: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9643: {
    width: wp("4.291652826871273%"),
    minWidth: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.76019965277777%"),
    top: hp("12.568306010928957%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_9644: {
    width: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9645: {
    width: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9669: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%"),
    top: hp("4.234972677595625%"),
    justifyContent: "center"
  },
  Text_1864_9669: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9670: {
    width: wp("19.52701881887832%"),
    minWidth: wp("19.52701881887832%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.47909118357488%"),
    top: hp("17.759562841530048%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_9671: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("18.85245901639344%"),
    justifyContent: "center"
  },
  Text_1864_9671: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9672: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169067%"),
    top: hp("12.158469945355186%"),
    justifyContent: "center"
  },
  Text_1864_9672: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_9673: {
    width: wp("79.39557061679122%"),
    minWidth: wp("79.39557061679122%"),
    height: hp("0.000004197451739433309%"),
    minHeight: hp("0.000004197451739433309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86237545289855%"),
    top: hp("7.513661202185787%")
  },
  ImageBackground_1864_9674: {
    width: wp("79.39557061679122%"),
    minWidth: wp("79.39557061679122%"),
    height: hp("0.000004197451739433309%"),
    minHeight: hp("0.000004197451739433309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86237545289855%"),
    top: hp("15.300546448087431%")
  },
  View_1864_9675: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("103.9617486338798%"),
    minHeight: hp("103.9617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102.45901639344261%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  ImageBackground_1864_9676: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.7536231884058%"),
    top: hp("201.36612021857925%")
  },
  View_1864_9681: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("106.55737704918033%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_9682: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("136.74863387978144%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_9683: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("166.9398907103825%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1864_9684: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("190.1639344262295%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_9685: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.14009661835749%"),
    top: hp("190.1639344262295%"),
    resizeMode: "cover"
  },
  View_1864_9686: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.54106280193236%"),
    top: hp("109.28961748633881%"),
    justifyContent: "flex-start"
  },
  Text_1864_9686: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9687: {
    width: wp("64.25120772946859%"),
    minWidth: wp("64.25120772946859%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("118.16939890710383%")
  },
  View_1864_9688: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9689: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9690: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9691: {
    width: wp("2.309484067170516%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1922200520833286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2582559631642525%")
  },
  ImageBackground_1864_9692: {
    width: wp("2.2720576484422175%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.9539254610655945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2582559631642525%")
  },
  ImageBackground_1864_9693: {
    width: wp("0.48830693470683073%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.9539254610655945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.601081295289855%")
  },
  ImageBackground_1864_9694: {
    width: wp("0.48818409730846757%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.9539254610655945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.736696105072465%")
  },
  ImageBackground_1864_9695: {
    width: wp("11.301517947284495%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.417761171497585%")
  },
  View_1864_9704: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74879227053141%")
  },
  ImageBackground_1864_9705: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9709: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74879227053141%")
  },
  View_1864_9710: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9711: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9712: {
    width: wp("3.904798756475034%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.4609658061594075%")
  },
  ImageBackground_1864_9713: {
    width: wp("11.301423961989546%"),
    height: hp("1.132476134378402%"),
    top: hp("1.9210398522882741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.417761171497574%")
  },
  View_1864_9722: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9723: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9741: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("139.4808743169399%"),
    justifyContent: "flex-start"
  },
  Text_1864_9741: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9742: {
    width: wp("64.25120772946859%"),
    minWidth: wp("64.25120772946859%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("148.36065573770492%")
  },
  View_1864_9743: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9744: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9745: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9746: {
    width: wp("2.309484067170516%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1922200520833428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2582559631642525%")
  },
  ImageBackground_1864_9747: {
    width: wp("2.2720576484422175%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2582559631642525%")
  },
  ImageBackground_1864_9748: {
    width: wp("0.48830693470683073%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.601081295289855%")
  },
  ImageBackground_1864_9749: {
    width: wp("0.48818409730846757%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.736696105072465%")
  },
  ImageBackground_1864_9750: {
    width: wp("11.301517947284495%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.417761171497585%")
  },
  View_1864_9759: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74879227053141%")
  },
  ImageBackground_1864_9760: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9764: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74879227053141%")
  },
  View_1864_9765: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9766: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9767: {
    width: wp("3.904798756475034%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.4609658061594075%")
  },
  ImageBackground_1864_9768: {
    width: wp("11.301423961989546%"),
    height: hp("1.132476134378402%"),
    top: hp("1.92103985228826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.417761171497574%")
  },
  View_1864_9777: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9778: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9796: {
    width: wp("64.25120772946859%"),
    minWidth: wp("64.25120772946859%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("169.672131147541%")
  },
  View_1864_9797: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.289855072463766%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_9797: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_9798: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74879227053141%")
  },
  ImageBackground_1864_9799: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_9803: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_9804: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
