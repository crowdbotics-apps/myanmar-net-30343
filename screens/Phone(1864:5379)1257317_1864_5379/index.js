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
      <View style={styles.View_1864_5380} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_5381}
      />
      <View style={styles.View_1864_5385} />
      <View style={styles.View_1864_5386} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a06/fc18/31f364592b359e5fa495bf8b782634a2"
        }}
        style={styles.ImageBackground_1864_5387}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_5392}
      />
      <View style={styles.View_1864_5393}>
        <Text style={styles.Text_1864_5393}>423665935</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5121/cf5b/9f99cb6b2c6b312b88eaf3a8dc8c95c7"
        }}
        style={styles.ImageBackground_1864_5394}
      />
      <View style={styles.View_1864_5395} />
      <View style={styles.View_1864_5396}>
        <Text style={styles.Text_1864_5396}>Balance : 100,000 Ks</Text>
      </View>
      <View style={styles.View_1864_5397} />
      <View style={styles.View_1864_5398}>
        <Text style={styles.Text_1864_5398}>Credit</Text>
      </View>
      <View style={styles.View_1864_5399}>
        <Text style={styles.Text_1864_5399}>2000Ks</Text>
      </View>
      <View style={styles.View_1864_5400} />
      <View style={styles.View_1864_5401}>
        <Text style={styles.Text_1864_5401}>Maximum speed</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672e/54cc/703e70ec85130415365dea83fc1ad7fa"
        }}
        style={styles.ImageBackground_1864_5402}
      />
      <View style={styles.View_1864_5403} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_5404}
      />
      <View style={styles.View_1864_5405}>
        <Text style={styles.Text_1864_5405}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_5406}>
        <Text style={styles.Text_1864_5406}>Remaining D</Text>
      </View>
      <View style={styles.View_1864_5407}>
        <Text style={styles.Text_1864_5407}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_5408}>
        <Text style={styles.Text_1864_5408}>Expirat</Text>
      </View>
      <View style={styles.View_1864_5409}>
        <Text style={styles.Text_1864_5409}>11 MB</Text>
      </View>
      <View style={styles.View_1864_5410}>
        <Text style={styles.Text_1864_5410}>2020-02-01</Text>
      </View>
      <View style={styles.View_1864_5411}>
        <Text style={styles.Text_1864_5411}>Data 3 GB</Text>
      </View>
      <View style={styles.View_1864_5412}>
        <Text style={styles.Text_1864_5412}>Data 1 GB</Text>
      </View>
      <View style={styles.View_1864_5413}>
        <Text style={styles.Text_1864_5413}>Active Packs (3)</Text>
      </View>
      <View style={styles.View_1864_5414}>
        <Text style={styles.Text_1864_5414}>Internet</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/1f9a/fb0e0f3445d26610c6d076f222ca6c9a"
        }}
        style={styles.ImageBackground_1864_5415}
      />
      <View style={styles.View_1864_5416} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a9/ae02/e884897105804dcc81810006e5be6c92"
        }}
        style={styles.ImageBackground_1864_5417}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6833/3d7b/b3640942fa7182bc37317bd23df7e8db"
        }}
        style={styles.ImageBackground_1864_5418}
      />
      <View style={styles.View_1864_5419}>
        <Text style={styles.Text_1864_5419}>Recommendations</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec4e/b91c/c9b443eaa8488ef24f09ae513071f0d0"
        }}
        style={styles.ImageBackground_1864_5420}
      />
      <View style={styles.View_1864_5421} />
      <View style={styles.View_1864_5422}>
        <Text style={styles.Text_1864_5422}>Buy</Text>
      </View>
      <View style={styles.View_1864_5423}>
        <View style={styles.View_1864_5424} />
        <View style={styles.View_1864_5425}>
          <Text style={styles.Text_1864_5425}>Buy</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a9e/8e09/54257e6ab20942241bc45bf350bd9f23"
        }}
        style={styles.ImageBackground_1864_5426}
      />
      <View style={styles.View_1864_5427}>
        <Text style={styles.Text_1864_5427}>See all</Text>
      </View>
      <View style={styles.View_1864_5428}>
        <Text style={styles.Text_1864_5428}>10Mbps</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b27/8561/ddf7806f2e5a4888b1b7365f82927572"
        }}
        style={styles.ImageBackground_1864_5429}
      />
      <View style={styles.View_1864_5450}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_5451}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_5453}
      />
      <View style={styles.View_1864_5454} />
      <View style={styles.View_1864_5455} />
      <View style={styles.View_1864_5456} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3218/d59c/a431d701cca31bb953e33d89b21f69a7"
        }}
        style={styles.ImageBackground_1864_5457}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caff/a1b5/987dec7c7975435bfcaf3100f57b7104"
        }}
        style={styles.ImageBackground_1864_5458}
      />
      <View style={styles.View_1864_5459} />
      <View style={styles.View_1864_5460}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5345/6e93/13df8dfc4c0b426c51b83472e8c6402e"
          }}
          style={styles.ImageBackground_1864_5461}
        />
        <View style={styles.View_1864_5462}>
          <Text style={styles.Text_1864_5462}>
            09-765338440 (9:00 AM to 7:30 PM Everyday)
          </Text>
        </View>
      </View>
      <View style={styles.View_1864_5463}>
        <Text style={styles.Text_1864_5463}>
          No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d86a/1c07/7e759385bba8fb770347632d4c30bca9"
        }}
        style={styles.ImageBackground_1864_5464}
      />
      <View style={styles.View_1864_5465} />
      <View style={styles.View_1864_5466}>
        <Text style={styles.Text_1864_5466}>
          Myanmar Net © 2018. All Rights Reserved.
        </Text>
      </View>
      <View style={styles.View_1864_5467}>
        <View style={styles.View_1864_5468}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
            }}
            style={styles.ImageBackground_1864_5469}
          />
        </View>
      </View>
      <View style={styles.View_1864_5472}>
        <View style={styles.View_1864_5473} />
        <View style={styles.View_1864_5474}>
          <View style={styles.View_1864_5475}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
              }}
              style={styles.ImageBackground_1864_5476}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_5479}>
        <View style={styles.View_1864_5480} />
        <View style={styles.View_1864_5481}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
            }}
            style={styles.ImageBackground_1864_5482}
          />
        </View>
      </View>
      <View style={styles.View_1864_5485}>
        <View style={styles.View_1864_5486} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
          }}
          style={styles.ImageBackground_1864_5487}
        />
      </View>
      <View style={styles.View_1864_5488}>
        <View style={styles.View_1864_5489}>
          <View style={styles.View_1864_5490}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/706d/9cb8/5d037e7bdaf90d0e59934c83a7830364"
              }}
              style={styles.ImageBackground_1864_5491}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_5498}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_5499}
        />
      </View>
      <View style={styles.View_1864_5517}>
        <Text style={styles.Text_1864_5517}>Download Myanmar Net app</Text>
      </View>
      <View style={styles.View_1864_5518}>
        <View style={styles.View_1864_5519}>
          <View style={styles.View_1864_5520}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_5521}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_5522}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_5523}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_5524}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_5525}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/6a1d/24b97c4c5ff8e5c21fc9c0ff006c9285"
              }}
              style={styles.ImageBackground_1864_5526}
            />
          </View>
        </View>
        <View style={styles.View_1864_5535}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_5536}
          />
        </View>
        <View style={styles.View_1864_5540}>
          <View style={styles.View_1864_5541}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_5542}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_5543}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bd/dda8/3a91b8d0fbcdb7d2d7a6254666cb3097"
              }}
              style={styles.ImageBackground_1864_5544}
            />
          </View>
        </View>
        <View style={styles.View_1864_5553}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_5554}
          />
        </View>
      </View>
      <View style={styles.View_1864_5572}>
        <Text style={styles.Text_1864_5572}>Download Myanmar Cast app</Text>
      </View>
      <View style={styles.View_1864_5573}>
        <View style={styles.View_1864_5574}>
          <View style={styles.View_1864_5575}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_5576}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_5577}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_5578}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_5579}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_5580}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/6a1d/24b97c4c5ff8e5c21fc9c0ff006c9285"
              }}
              style={styles.ImageBackground_1864_5581}
            />
          </View>
        </View>
        <View style={styles.View_1864_5590}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_5591}
          />
        </View>
        <View style={styles.View_1864_5595}>
          <View style={styles.View_1864_5596}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_5597}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_5598}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bd/dda8/3a91b8d0fbcdb7d2d7a6254666cb3097"
              }}
              style={styles.ImageBackground_1864_5599}
            />
          </View>
        </View>
        <View style={styles.View_1864_5608}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_5609}
          />
        </View>
      </View>
      <View style={styles.View_1864_5627}>
        <View style={styles.View_1864_5628}>
          <Text style={styles.Text_1864_5628}>Download My Canal app</Text>
        </View>
        <View style={styles.View_1864_5629}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee49/1937/d705603dbcbe65d3e21dcf89a704471a"
            }}
            style={styles.ImageBackground_1864_5630}
          />
        </View>
        <View style={styles.View_1864_5634}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_5635}
          />
        </View>
      </View>
      <View style={styles.View_1864_5653}>
        <View style={styles.View_1864_5654} />
        <View style={styles.View_1864_5655}>
          <View style={styles.View_1864_5656}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b15e/fa6b/bd85222c8cfaa08971f6a128df444680"
              }}
              style={styles.ImageBackground_1864_5657}
            />
          </View>
        </View>
        <View style={styles.View_1864_5681}>
          <View style={styles.View_1864_5682}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b15e/fa6b/bd85222c8cfaa08971f6a128df444680"
              }}
              style={styles.ImageBackground_1864_5683}
            />
          </View>
        </View>
        <View style={styles.View_1864_5707}>
          <Text style={styles.Text_1864_5707}>Account Number</Text>
        </View>
        <View style={styles.View_1864_5708} />
        <View style={styles.View_1864_5709}>
          <Text style={styles.Text_1864_5709}>Top up</Text>
        </View>
        <View style={styles.View_1864_5710}>
          <Text style={styles.Text_1864_5710}>xxxx-xxxx-xxxx-xxxx</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e32/6d7d/449efc93f78f12d3780824ecf6b440e0"
          }}
          style={styles.ImageBackground_1864_5711}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e32/6d7d/449efc93f78f12d3780824ecf6b440e0"
          }}
          style={styles.ImageBackground_1864_5712}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("283.1967213114754%") },
  View_1864_5380: {
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
  ImageBackground_1864_5381: {
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
  View_1864_5385: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("103.9617486338798%"),
    minHeight: hp("103.9617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("136.74863387978144%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_1864_5386: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("87.8415300546448%"),
    minHeight: hp("87.8415300546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  ImageBackground_1864_5387: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.7536231884058%"),
    top: hp("235.65573770491804%")
  },
  ImageBackground_1864_5392: {
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
  View_1864_5393: {
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
  Text_1864_5393: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5394: {
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
  View_1864_5395: {
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
  View_1864_5396: {
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
  Text_1864_5396: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5397: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_5398: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("54.91803278688525%"),
    justifyContent: "flex-start"
  },
  Text_1864_5398: {
    color: "rgba(173, 52, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5399: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777779%"),
    top: hp("54.644808743169406%"),
    justifyContent: "flex-start"
  },
  Text_1864_5399: {
    color: "rgba(173, 52, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5400: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("68.16939890710383%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_5401: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.975845410628018%"),
    top: hp("70.21857923497268%"),
    justifyContent: "flex-start"
  },
  Text_1864_5401: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5402: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("70.21857923497268%"),
    resizeMode: "cover"
  },
  View_1864_5403: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("76.36612021857924%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_5404: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.502415458937197%"),
    top: hp("84.56284153005464%")
  },
  View_1864_5405: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("87.1584699453552%"),
    justifyContent: "flex-start"
  },
  Text_1864_5405: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5406: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.53140096618358%"),
    top: hp("87.1584699453552%"),
    justifyContent: "flex-start"
  },
  Text_1864_5406: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5407: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("90.1639344262295%"),
    justifyContent: "flex-start"
  },
  Text_1864_5407: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5408: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.53140096618358%"),
    top: hp("90.1639344262295%"),
    justifyContent: "flex-start"
  },
  Text_1864_5408: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5409: {
    width: wp("9.903381642512077%"),
    minWidth: wp("9.903381642512077%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.275362318840585%"),
    top: hp("87.29508196721312%"),
    justifyContent: "flex-start"
  },
  Text_1864_5409: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5410: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.028985507246375%"),
    top: hp("90.1639344262295%"),
    justifyContent: "flex-start"
  },
  Text_1864_5410: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5411: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("84.01639344262296%"),
    justifyContent: "flex-start"
  },
  Text_1864_5411: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5412: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.53140096618358%"),
    top: hp("84.01639344262296%"),
    justifyContent: "flex-start"
  },
  Text_1864_5412: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5413: {
    width: wp("28.26086956521739%"),
    minWidth: wp("28.26086956521739%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("79.09836065573771%"),
    justifyContent: "flex-start"
  },
  Text_1864_5413: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5414: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("62.295081967213115%"),
    justifyContent: "flex-start"
  },
  Text_1864_5414: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5415: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8.343138460253106%"),
    minHeight: hp("8.343138460253106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.14975845410628%"),
    top: hp("84.15307216956968%")
  },
  View_1864_5416: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.85024154589372%"),
    top: hp("84.01639344262296%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1864_5417: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.47342995169082%"),
    top: hp("86.88524590163934%")
  },
  ImageBackground_1864_5418: {
    width: wp("1.932367149758454%"),
    height: hp("1.873536318377719%"),
    top: hp("87.56830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.40579710144928%")
  },
  View_1864_5419: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("100.81967213114753%"),
    justifyContent: "flex-start"
  },
  Text_1864_5419: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5420: {
    width: wp("54.347826086956516%"),
    minWidth: wp("54.347826086956516%"),
    height: hp("19.18885694826887%"),
    minHeight: hp("19.18885694826887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("106.69398907103825%"),
    resizeMode: "cover"
  },
  View_1864_5421: {
    width: wp("19.10560902765984%"),
    minWidth: wp("19.10560902765984%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.256038647342994%"),
    top: hp("127.73224043715847%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_5422: {
    width: wp("6.518384223974845%"),
    minWidth: wp("6.518384223974845%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.053140096618357%"),
    top: hp("128.96174863387978%"),
    justifyContent: "center"
  },
  Text_1864_5422: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5423: {
    width: wp("19.10560902765984%"),
    minWidth: wp("19.10560902765984%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.67632850241546%"),
    top: hp("127.73224043715847%")
  },
  View_1864_5424: {
    width: wp("19.10560902765984%"),
    minWidth: wp("19.10560902765984%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
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
  View_1864_5425: {
    width: wp("6.518384223974845%"),
    minWidth: wp("6.518384223974845%"),
    minHeight: hp("3.0737702312365256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.293402777777786%"),
    top: hp("0.9221311475409806%"),
    justifyContent: "center"
  },
  Text_1864_5425: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5426: {
    width: wp("54.347826086956516%"),
    minWidth: wp("54.347826086956516%"),
    height: hp("19.18885694826887%"),
    minHeight: hp("19.18885694826887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.28502415458937%"),
    top: hp("106.69398907103825%"),
    resizeMode: "cover"
  },
  View_1864_5427: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.54106280193237%"),
    top: hp("101.22950819672131%"),
    justifyContent: "flex-start"
  },
  Text_1864_5427: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5428: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.57004830917874%"),
    top: hp("70.21857923497268%"),
    justifyContent: "flex-start"
  },
  Text_1864_5428: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5429: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_5450: {
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
  ImageBackground_1864_5451: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5453: {
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
  View_1864_5454: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("140.84699453551912%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_5455: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("171.03825136612022%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_5456: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("201.2295081967213%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1864_5457: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("224.45355191256832%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_5458: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.14009661835749%"),
    top: hp("224.45355191256832%"),
    resizeMode: "cover"
  },
  View_1864_5459: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("251.2295081967213%"),
    backgroundColor: "rgba(54, 54, 54, 1)"
  },
  View_1864_5460: {
    width: wp("77.23926046620244%"),
    minWidth: wp("77.23926046620244%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.851788949275361%"),
    top: hp("256.0109289617486%")
  },
  ImageBackground_1864_5461: {
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
  View_1864_5462: {
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
  Text_1864_5462: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5463: {
    width: wp("82.56610372792119%"),
    minWidth: wp("82.56610372792119%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.819859601449277%"),
    top: hp("260.24590163934425%"),
    justifyContent: "flex-start"
  },
  Text_1864_5463: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5464: {
    width: wp("4.842586793761323%"),
    minWidth: wp("4.842586793761323%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("260.1092896174863%"),
    resizeMode: "cover"
  },
  View_1864_5465: {
    width: wp("100.2415458937198%"),
    minWidth: wp("100.2415458937198%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("278.27868852459017%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_5466: {
    width: wp("54.96335974062122%"),
    minWidth: wp("54.96335974062122%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.76003925120773%"),
    top: hp("279.78142076502735%"),
    justifyContent: "flex-start"
  },
  Text_1864_5466: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5467: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661837%"),
    top: hp("270.3551912568306%")
  },
  View_1864_5468: {
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
  ImageBackground_1864_5469: {
    width: wp("5.50835973398697%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653832607581762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19578426932367066%")
  },
  View_1864_5472: {
    width: wp("5.882024995370763%"),
    minWidth: wp("5.882024995370763%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.748792270531396%"),
    top: hp("270.4918032786885%")
  },
  View_1864_5473: {
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
  View_1864_5474: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0.2217944202527633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5475: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5476: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5479: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.1214145531401%"),
    top: hp("270.4918032786885%")
  },
  View_1864_5480: {
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
  View_1864_5481: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5482: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5485: {
    width: wp("5.882058627363564%"),
    minWidth: wp("5.882058627363564%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("270.4918032786885%")
  },
  View_1864_5486: {
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
  ImageBackground_1864_5487: {
    width: wp("5.881911660162147%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5488: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94685990338165%"),
    top: hp("270.4918032786885%")
  },
  View_1864_5489: {
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
  View_1864_5490: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.17009797643447655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3920403079710013%")
  },
  ImageBackground_1864_5491: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5498: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("271.85792349726773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.6086956521739%")
  },
  ImageBackground_1864_5499: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5517: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.54106280193236%"),
    top: hp("143.5792349726776%"),
    justifyContent: "flex-start"
  },
  Text_1864_5517: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5518: {
    width: wp("64.25120772946859%"),
    minWidth: wp("64.25120772946859%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("152.45901639344262%")
  },
  View_1864_5519: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5520: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5521: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5522: {
    width: wp("2.309484067170516%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1922200520833428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.258020078502419%")
  },
  ImageBackground_1864_5523: {
    width: wp("2.2720576484422175%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.258020078502419%")
  },
  ImageBackground_1864_5524: {
    width: wp("0.48830693470683073%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600845410628022%")
  },
  ImageBackground_1864_5525: {
    width: wp("0.48818409730846757%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.736696105072465%")
  },
  ImageBackground_1864_5526: {
    width: wp("11.301517947284495%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.417761171497585%")
  },
  View_1864_5535: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74879227053141%")
  },
  ImageBackground_1864_5536: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5540: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74879227053141%")
  },
  View_1864_5541: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5542: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5543: {
    width: wp("3.904798756475034%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460729921497574%")
  },
  ImageBackground_1864_5544: {
    width: wp("11.301423961989546%"),
    height: hp("1.132476134378402%"),
    top: hp("1.92103985228826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.417761171497574%")
  },
  View_1864_5553: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5554: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5572: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("173.77049180327867%"),
    justifyContent: "flex-start"
  },
  Text_1864_5572: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5573: {
    width: wp("64.25120772946859%"),
    minWidth: wp("64.25120772946859%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("182.65027322404373%")
  },
  View_1864_5574: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5575: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5576: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5577: {
    width: wp("2.309484067170516%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1922200520833144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.258020078502419%")
  },
  ImageBackground_1864_5578: {
    width: wp("2.2720576484422175%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.9539254610655519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.258020078502419%")
  },
  ImageBackground_1864_5579: {
    width: wp("0.48830693470683073%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.9539254610655519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600845410628022%")
  },
  ImageBackground_1864_5580: {
    width: wp("0.48818409730846757%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.9539254610655519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.736696105072465%")
  },
  ImageBackground_1864_5581: {
    width: wp("11.301517947284495%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.417761171497585%")
  },
  View_1864_5590: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74879227053141%")
  },
  ImageBackground_1864_5591: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5595: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74879227053141%")
  },
  View_1864_5596: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5597: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5598: {
    width: wp("3.904798756475034%"),
    height: hp("2.708365226703915%"),
    top: hp("1.03539638831964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460729921497574%")
  },
  ImageBackground_1864_5599: {
    width: wp("11.301423961989546%"),
    height: hp("1.132476134378402%"),
    top: hp("1.9210398522882315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.417761171497574%")
  },
  View_1864_5608: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5609: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5627: {
    width: wp("64.25120772946859%"),
    minWidth: wp("64.25120772946859%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("203.96174863387978%")
  },
  View_1864_5628: {
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
  Text_1864_5628: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5629: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74879227053141%")
  },
  ImageBackground_1864_5630: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5634: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5635: {
    width: wp("28.502415458937197%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5653: {
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
  View_1864_5654: {
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
  View_1864_5655: {
    width: wp("4.291652826871273%"),
    minWidth: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.75996376811594%"),
    top: hp("4.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_5656: {
    width: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5657: {
    width: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5681: {
    width: wp("4.291652826871273%"),
    minWidth: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.75996376811594%"),
    top: hp("12.568306010928957%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_5682: {
    width: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5683: {
    width: wp("4.291652826871273%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5707: {
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
  Text_1864_5707: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5708: {
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
  View_1864_5709: {
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
  Text_1864_5709: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5710: {
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
  Text_1864_5710: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5711: {
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
  ImageBackground_1864_5712: {
    width: wp("79.39557061679122%"),
    minWidth: wp("79.39557061679122%"),
    height: hp("0.000004197451739433309%"),
    minHeight: hp("0.000004197451739433309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86237545289855%"),
    top: hp("15.300546448087431%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
