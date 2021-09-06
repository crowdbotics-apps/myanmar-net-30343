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
      <View style={styles.View_1864_5714}>
        <Text style={styles.Text_1864_5714}>See all</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_5715}
      />
      <View style={styles.View_1864_5716} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_5717}
      />
      <View style={styles.View_1864_5721} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_5722}
      />
      <View style={styles.View_1864_5723}>
        <Text style={styles.Text_1864_5723}>423665935</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5121/cf5b/9f99cb6b2c6b312b88eaf3a8dc8c95c7"
        }}
        style={styles.ImageBackground_1864_5724}
      />
      <View style={styles.View_1864_5725} />
      <View style={styles.View_1864_5726}>
        <Text style={styles.Text_1864_5726}>Balance : 100,000 Ks</Text>
      </View>
      <View style={styles.View_1864_5727} />
      <View style={styles.View_1864_5728}>
        <Text style={styles.Text_1864_5728}>Credit</Text>
      </View>
      <View style={styles.View_1864_5729}>
        <Text style={styles.Text_1864_5729}>2000Ks</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0058/239f/f93c73240bcfb467859b7540a3af2142"
        }}
        style={styles.ImageBackground_1864_5730}
      />
      <View style={styles.View_1864_5731} />
      <View style={styles.View_1864_5732}>
        <Text style={styles.Text_1864_5732}>Maximum speed</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672e/54cc/703e70ec85130415365dea83fc1ad7fa"
        }}
        style={styles.ImageBackground_1864_5733}
      />
      <View style={styles.View_1864_5734} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_5735}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_5736}
      />
      <View style={styles.View_1864_5737}>
        <Text style={styles.Text_1864_5737}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_5738}>
        <Text style={styles.Text_1864_5738}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_5739}>
        <Text style={styles.Text_1864_5739}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_5740}>
        <Text style={styles.Text_1864_5740}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_5741}>
        <Text style={styles.Text_1864_5741}>11 MB</Text>
      </View>
      <View style={styles.View_1864_5742}>
        <Text style={styles.Text_1864_5742}>2020-02-01</Text>
      </View>
      <View style={styles.View_1864_5743}>
        <Text style={styles.Text_1864_5743}>Data 3 GB</Text>
      </View>
      <View style={styles.View_1864_5744}>
        <Text style={styles.Text_1864_5744}>Data 1 GB</Text>
      </View>
      <View style={styles.View_1864_5745}>
        <Text style={styles.Text_1864_5745}>Active Packs (3)</Text>
      </View>
      <View style={styles.View_1864_5746}>
        <Text style={styles.Text_1864_5746}>Internet</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/1f9a/fb0e0f3445d26610c6d076f222ca6c9a"
        }}
        style={styles.ImageBackground_1864_5747}
      />
      <View style={styles.View_1864_5748} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a9/ae02/e884897105804dcc81810006e5be6c92"
        }}
        style={styles.ImageBackground_1864_5749}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6833/3d7b/b3640942fa7182bc37317bd23df7e8db"
        }}
        style={styles.ImageBackground_1864_5750}
      />
      <View style={styles.View_1864_5751}>
        <Text style={styles.Text_1864_5751}>Recommendations</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec4e/b91c/c9b443eaa8488ef24f09ae513071f0d0"
        }}
        style={styles.ImageBackground_1864_5752}
      />
      <View style={styles.View_1864_5753} />
      <View style={styles.View_1864_5754}>
        <Text style={styles.Text_1864_5754}>Buy</Text>
      </View>
      <View style={styles.View_1864_5755}>
        <View style={styles.View_1864_5756} />
        <View style={styles.View_1864_5757}>
          <Text style={styles.Text_1864_5757}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_5758}>
        <View style={styles.View_1864_5759} />
        <View style={styles.View_1864_5760}>
          <Text style={styles.Text_1864_5760}>Buy</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec4e/b91c/c9b443eaa8488ef24f09ae513071f0d0"
        }}
        style={styles.ImageBackground_1864_5761}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a9e/8e09/54257e6ab20942241bc45bf350bd9f23"
        }}
        style={styles.ImageBackground_1864_5762}
      />
      <View style={styles.View_1864_5763} />
      <View style={styles.View_1864_5764}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3218/d59c/a431d701cca31bb953e33d89b21f69a7"
          }}
          style={styles.ImageBackground_1864_5765}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caff/a1b5/987dec7c7975435bfcaf3100f57b7104"
          }}
          style={styles.ImageBackground_1864_5766}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b227/1ea2/cdc7f93ac1ff04492a6468f445043083"
          }}
          style={styles.ImageBackground_1864_5767}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1937/92fd/f88758b2512194bd98446be7b6a48c85"
          }}
          style={styles.ImageBackground_1864_5768}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a06/fc18/31f364592b359e5fa495bf8b782634a2"
        }}
        style={styles.ImageBackground_1864_5769}
      />
      <View style={styles.View_1864_5774}>
        <Text style={styles.Text_1864_5774}>See all</Text>
      </View>
      <View style={styles.View_1864_5775}>
        <Text style={styles.Text_1864_5775}>10Mbps</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a0/6689/02fc154db7272f3035351e6858c578fd"
        }}
        style={styles.ImageBackground_1864_5776}
      />
      <View style={styles.View_1864_5797}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_5798}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_5800}
      />
      <View style={styles.View_1864_5801}>
        <View style={styles.View_1864_5802}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
            }}
            style={styles.ImageBackground_1864_5803}
          />
        </View>
      </View>
      <View style={styles.View_1864_5806} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
        }}
        style={styles.ImageBackground_1864_5807}
      />
      <View style={styles.View_1864_5808} />
      <View style={styles.View_1864_5809}>
        <Text style={styles.Text_1864_5809}>
          Myanmar Net © 2018. All Rights Reserved.
        </Text>
      </View>
      <View style={styles.View_1864_5810}>
        <Text style={styles.Text_1864_5810}>
          09-765338440 (9:00 AM to 7:30 PM Everyday)
        </Text>
      </View>
      <View style={styles.View_1864_5811}>
        <Text style={styles.Text_1864_5811}>
          No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
        }}
        style={styles.ImageBackground_1864_5812}
      />
      <View style={styles.View_1864_5813}>
        <View style={styles.View_1864_5814}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
            }}
            style={styles.ImageBackground_1864_5815}
          />
        </View>
      </View>
      <View style={styles.View_1864_5818}>
        <View style={styles.View_1864_5819} />
        <View style={styles.View_1864_5820}>
          <View style={styles.View_1864_5821}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
              }}
              style={styles.ImageBackground_1864_5822}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_5825}>
        <View style={styles.View_1864_5826} />
        <View style={styles.View_1864_5827}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
            }}
            style={styles.ImageBackground_1864_5828}
          />
        </View>
      </View>
      <View style={styles.View_1864_5831}>
        <View style={styles.View_1864_5832} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
          }}
          style={styles.ImageBackground_1864_5833}
        />
      </View>
      <View style={styles.View_1864_5834}>
        <View style={styles.View_1864_5835}>
          <View style={styles.View_1864_5836}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff5/fbef/0efc44e786157dd9fbf5616a13085dfe"
              }}
              style={styles.ImageBackground_1864_5837}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_5844} />
      <View style={styles.View_1864_5845} />
      <View style={styles.View_1864_5846} />
      <View style={styles.View_1864_5847}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_5848}
        />
      </View>
      <View style={styles.View_1864_5866}>
        <Text style={styles.Text_1864_5866}>Download Myanmar Net app</Text>
      </View>
      <View style={styles.View_1864_5867}>
        <View style={styles.View_1864_5868}>
          <View style={styles.View_1864_5869}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_5870}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_5871}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_5872}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_5873}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_5874}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5248/1815/d7c9b3f2efdb7d4687466ab00fd6dfbd"
              }}
              style={styles.ImageBackground_1864_5875}
            />
          </View>
        </View>
        <View style={styles.View_1864_5884}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_5885}
          />
        </View>
        <View style={styles.View_1864_5889}>
          <View style={styles.View_1864_5890}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_5891}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_5892}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bd/dda8/3a91b8d0fbcdb7d2d7a6254666cb3097"
              }}
              style={styles.ImageBackground_1864_5893}
            />
          </View>
        </View>
        <View style={styles.View_1864_5902}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_5903}
          />
        </View>
      </View>
      <View style={styles.View_1864_5921}>
        <Text style={styles.Text_1864_5921}>Download Myanmar Cast app</Text>
      </View>
      <View style={styles.View_1864_5922}>
        <View style={styles.View_1864_5923}>
          <View style={styles.View_1864_5924}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_5925}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_5926}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_5927}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_5928}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_5929}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/6a1d/24b97c4c5ff8e5c21fc9c0ff006c9285"
              }}
              style={styles.ImageBackground_1864_5930}
            />
          </View>
        </View>
        <View style={styles.View_1864_5939}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_5940}
          />
        </View>
        <View style={styles.View_1864_5944}>
          <View style={styles.View_1864_5945}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_5946}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_5947}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0052/20f4/563bf3c61a59815ad176569b0660ac94"
              }}
              style={styles.ImageBackground_1864_5948}
            />
          </View>
        </View>
        <View style={styles.View_1864_5957}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_5958}
          />
        </View>
      </View>
      <View style={styles.View_1864_5976}>
        <View style={styles.View_1864_5977}>
          <Text style={styles.Text_1864_5977}>Download My Canal app</Text>
        </View>
        <View style={styles.View_1864_5978}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee49/1937/d705603dbcbe65d3e21dcf89a704471a"
            }}
            style={styles.ImageBackground_1864_5979}
          />
        </View>
        <View style={styles.View_1864_5983}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_5984}
          />
        </View>
      </View>
      <View style={styles.View_1864_6002} />
      <View style={styles.View_1864_6003}>
        <View style={styles.View_1864_6004}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd13/907f/8fe5164501e59a46ba41fd61456a886c"
            }}
            style={styles.ImageBackground_1864_6005}
          />
        </View>
      </View>
      <View style={styles.View_1864_6029}>
        <View style={styles.View_1864_6030}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd13/907f/8fe5164501e59a46ba41fd61456a886c"
            }}
            style={styles.ImageBackground_1864_6031}
          />
        </View>
      </View>
      <View style={styles.View_1864_6055}>
        <Text style={styles.Text_1864_6055}>Account Number</Text>
      </View>
      <View style={styles.View_1864_6056} />
      <View style={styles.View_1864_6057}>
        <Text style={styles.Text_1864_6057}>Top up</Text>
      </View>
      <View style={styles.View_1864_6058}>
        <Text style={styles.Text_1864_6058}>xxxx-xxxx-xxxx-xxxx</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4086/0dca/83f33d998143e0a6c6957ed899f8b171"
        }}
        style={styles.ImageBackground_1864_6059}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4086/0dca/83f33d998143e0a6c6957ed899f8b171"
        }}
        style={styles.ImageBackground_1864_6060}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("206.28415300546447%") },
  View_1864_5714: {
    width: wp("5.635491606714628%"),
    minWidth: wp("5.635491606714628%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("126.61870503597122%"),
    top: hp("74.31693989071039%"),
    justifyContent: "flex-start"
  },
  Text_1864_5714: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5715: {
    width: wp("0.5995203836930456%"),
    minWidth: wp("0.5995203836930456%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.60431654676259%"),
    top: hp("3.9617486338797816%")
  },
  View_1864_5716: {
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
  ImageBackground_1864_5717: {
    width: wp("2.6378896882494005%"),
    minWidth: wp("2.6378896882494005%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.796163069544365%"),
    top: hp("3.9617486338797816%")
  },
  View_1864_5721: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("53.00546448087432%"),
    minHeight: hp("53.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  ImageBackground_1864_5722: {
    width: wp("2.997601918465228%"),
    minWidth: wp("2.997601918465228%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.72901678657074%"),
    top: hp("13.114754098360656%"),
    resizeMode: "cover"
  },
  View_1864_5723: {
    width: wp("9.832134292565947%"),
    minWidth: wp("9.832134292565947%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.112709832134293%"),
    top: hp("13.524590163934427%"),
    justifyContent: "flex-start"
  },
  Text_1864_5723: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5724: {
    width: wp("3.117773572889735%"),
    minWidth: wp("3.117773572889735%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.796163069544365%"),
    top: hp("12.978142076502733%"),
    resizeMode: "cover"
  },
  View_1864_5725: {
    width: wp("36.930455635491604%"),
    minWidth: wp("36.930455635491604%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.796163069544365%"),
    top: hp("18.30601092896175%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_5726: {
    width: wp("22.54196642685851%"),
    minWidth: wp("22.54196642685851%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.71462829736211%"),
    top: hp("20.21857923497268%"),
    justifyContent: "flex-start"
  },
  Text_1864_5726: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5727: {
    width: wp("36.810551558753%"),
    minWidth: wp("36.810551558753%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.796163069544365%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_5728: {
    width: wp("5.155875299760192%"),
    minWidth: wp("5.155875299760192%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.594724220623502%"),
    top: hp("55.05464480874317%"),
    justifyContent: "flex-start"
  },
  Text_1864_5728: {
    color: "rgba(173, 52, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5729: {
    width: wp("6.594724220623502%"),
    minWidth: wp("6.594724220623502%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.61390887290168%"),
    top: hp("54.78142076502732%"),
    justifyContent: "flex-start"
  },
  Text_1864_5729: {
    color: "rgba(173, 52, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5730: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("46.72151159067623%"),
    minHeight: hp("46.72151159067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.58513189448441%"),
    top: hp("12.978075371413937%")
  },
  View_1864_5731: {
    width: wp("49.88009592326139%"),
    minWidth: wp("49.88009592326139%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.32374100719424%"),
    top: hp("18.30601092896175%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_5732: {
    width: wp("14.748201438848922%"),
    minWidth: wp("14.748201438848922%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.07913669064749%"),
    top: hp("20.491803278688526%"),
    justifyContent: "flex-start"
  },
  Text_1864_5732: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5733: {
    width: wp("2.3980815347721824%"),
    minWidth: wp("2.3980815347721824%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.24220623501199%"),
    top: hp("20.21857923497268%"),
    resizeMode: "cover"
  },
  View_1864_5734: {
    width: wp("49.88009592326139%"),
    minWidth: wp("49.88009592326139%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.32374100719424%"),
    top: hp("26.50273224043716%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_5735: {
    width: wp("0.9592326139088728%"),
    minWidth: wp("0.9592326139088728%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.55395683453237%"),
    top: hp("34.69945355191257%")
  },
  ImageBackground_1864_5736: {
    width: wp("0.9592326139088728%"),
    minWidth: wp("0.9592326139088728%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.72901678657075%"),
    top: hp("34.69945355191257%")
  },
  View_1864_5737: {
    width: wp("12.709832134292565%"),
    minWidth: wp("12.709832134292565%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.24220623501199%"),
    top: hp("37.295081967213115%"),
    justifyContent: "flex-start"
  },
  Text_1864_5737: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5738: {
    width: wp("12.709832134292565%"),
    minWidth: wp("12.709832134292565%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.41726618705036%"),
    top: hp("37.295081967213115%"),
    justifyContent: "flex-start"
  },
  Text_1864_5738: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5739: {
    width: wp("12.23021582733813%"),
    minWidth: wp("12.23021582733813%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.24220623501199%"),
    top: hp("40.30054644808743%"),
    justifyContent: "flex-start"
  },
  Text_1864_5739: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5740: {
    width: wp("12.23021582733813%"),
    minWidth: wp("12.23021582733813%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.41726618705036%"),
    top: hp("40.30054644808743%"),
    justifyContent: "flex-start"
  },
  Text_1864_5740: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5741: {
    width: wp("4.916067146282973%"),
    minWidth: wp("4.916067146282973%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.86570743405275%"),
    top: hp("37.43169398907104%"),
    justifyContent: "flex-start"
  },
  Text_1864_5741: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5742: {
    width: wp("8.513189448441247%"),
    minWidth: wp("8.513189448441247%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.26858513189448%"),
    top: hp("40.30054644808743%"),
    justifyContent: "flex-start"
  },
  Text_1864_5742: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5743: {
    width: wp("7.553956834532374%"),
    minWidth: wp("7.553956834532374%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.24220623501199%"),
    top: hp("34.15300546448087%"),
    justifyContent: "flex-start"
  },
  Text_1864_5743: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5744: {
    width: wp("7.553956834532374%"),
    minWidth: wp("7.553956834532374%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.41726618705036%"),
    top: hp("34.15300546448087%"),
    justifyContent: "flex-start"
  },
  Text_1864_5744: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5745: {
    width: wp("14.028776978417264%"),
    minWidth: wp("14.028776978417264%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.24220623501199%"),
    top: hp("29.23497267759563%"),
    justifyContent: "flex-start"
  },
  Text_1864_5745: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5746: {
    width: wp("8.393285371702639%"),
    minWidth: wp("8.393285371702639%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.44364508393286%"),
    top: hp("13.25136612021858%"),
    justifyContent: "flex-start"
  },
  Text_1864_5746: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5747: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8.343138460253106%"),
    minHeight: hp("8.343138460253106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.73860911270984%"),
    top: hp("34.2896841914276%")
  },
  View_1864_5748: {
    width: wp("6.594724220623502%"),
    minWidth: wp("6.594724220623502%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.3693045563549%"),
    top: hp("34.2896174863388%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1864_5749: {
    width: wp("2.877697841726619%"),
    minWidth: wp("2.877697841726619%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.16786570743405%"),
    top: hp("37.15846994535519%")
  },
  ImageBackground_1864_5750: {
    width: wp("0.9592326139088728%"),
    height: hp("1.873536318377719%"),
    top: hp("37.84153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.12709832134293%")
  },
  View_1864_5751: {
    width: wp("20.26378896882494%"),
    minWidth: wp("20.26378896882494%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.515587529976019%"),
    top: hp("67.34972677595628%"),
    justifyContent: "flex-start"
  },
  Text_1864_5751: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5752: {
    width: wp("26.978417266187048%"),
    minWidth: wp("26.978417266187048%"),
    height: hp("19.18885694826887%"),
    minHeight: hp("19.18885694826887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.39568345323741%"),
    top: hp("73.49726775956285%"),
    resizeMode: "cover"
  },
  View_1864_5753: {
    width: wp("9.484079301500206%"),
    minWidth: wp("9.484079301500206%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.028776978417264%"),
    top: hp("94.53551912568307%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_5754: {
    width: wp("3.2357446867213255%"),
    minWidth: wp("3.2357446867213255%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.26618705035971%"),
    top: hp("95.76502732240438%"),
    justifyContent: "center"
  },
  Text_1864_5754: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5755: {
    width: wp("9.484079301500206%"),
    minWidth: wp("9.484079301500206%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.04556354916067%"),
    top: hp("94.53551912568307%")
  },
  View_1864_5756: {
    width: wp("9.484079301500206%"),
    minWidth: wp("9.484079301500206%"),
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
  View_1864_5757: {
    width: wp("3.2357446867213255%"),
    minWidth: wp("3.2357446867213255%"),
    minHeight: hp("3.0737702312365256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1240632494004856%"),
    top: hp("0.9221311475409806%"),
    justifyContent: "center"
  },
  Text_1864_5757: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5758: {
    width: wp("9.484079301500206%"),
    minWidth: wp("9.484079301500206%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.18225419664267%"),
    top: hp("94.53551912568307%")
  },
  View_1864_5759: {
    width: wp("9.484079301500206%"),
    minWidth: wp("9.484079301500206%"),
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
  View_1864_5760: {
    width: wp("3.2357446867213255%"),
    minWidth: wp("3.2357446867213255%"),
    minHeight: hp("3.0737702312365256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1240632494004927%"),
    top: hp("0.9221311475409806%"),
    justifyContent: "center"
  },
  Text_1864_5760: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5761: {
    width: wp("26.978417266187048%"),
    minWidth: wp("26.978417266187048%"),
    height: hp("19.18885694826887%"),
    minHeight: hp("19.18885694826887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.42925659472422%"),
    top: hp("73.49726775956285%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_5762: {
    width: wp("26.978417266187048%"),
    minWidth: wp("26.978417266187048%"),
    height: hp("19.18885694826887%"),
    minHeight: hp("19.18885694826887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.412470023980816%"),
    top: hp("73.49726775956285%"),
    resizeMode: "cover"
  },
  View_1864_5763: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("81.69398907103826%"),
    minHeight: hp("81.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103.55191256830601%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_1864_5764: {
    width: wp("88.48920863309353%"),
    minWidth: wp("88.48920863309353%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.755395683453238%"),
    top: hp("161.0655737704918%")
  },
  ImageBackground_1864_5765: {
    width: wp("19.784172661870503%"),
    minWidth: wp("19.784172661870503%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_5766: {
    width: wp("19.784172661870503%"),
    minWidth: wp("19.784172661870503%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.901678657074342%"),
    top: hp("0.1366120218579283%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_5767: {
    width: wp("19.784172661870503%"),
    minWidth: wp("19.784172661870503%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.803357314148684%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_5768: {
    width: wp("19.784172661870503%"),
    minWidth: wp("19.784172661870503%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.70503597122301%"),
    top: hp("0.1366120218579283%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_5769: {
    width: wp("7.314148681055157%"),
    minWidth: wp("7.314148681055157%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.28297362110312%"),
    top: hp("172.54098360655738%")
  },
  View_1864_5774: {
    width: wp("5.635491606714628%"),
    minWidth: wp("5.635491606714628%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.44844124700239%"),
    top: hp("67.89617486338798%"),
    justifyContent: "flex-start"
  },
  Text_1864_5774: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5775: {
    width: wp("7.074340527577938%"),
    minWidth: wp("7.074340527577938%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.4916067146283%"),
    top: hp("20.76502732240437%"),
    justifyContent: "flex-start"
  },
  Text_1864_5775: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5776: {
    width: wp("19.18465227817746%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.40767386091127%")
  },
  View_1864_5797: {
    width: wp("1.9184652278177456%"),
    minWidth: wp("1.9184652278177456%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.68585131894484%"),
    top: hp("4.371584699453552%")
  },
  ImageBackground_1864_5798: {
    width: wp("1.9184652278177456%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5800: {
    width: wp("0.5995203836930456%"),
    minWidth: wp("0.5995203836930456%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.60431654676259%"),
    top: hp("3.9617486338797816%")
  },
  View_1864_5801: {
    width: wp("2.9197978744689794%"),
    minWidth: wp("2.9197978744689794%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.033573141486805%"),
    top: hp("189.20765027322403%")
  },
  View_1864_5802: {
    width: wp("2.9197978744689794%"),
    minWidth: wp("2.9197978744689794%"),
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
  ImageBackground_1864_5803: {
    width: wp("2.73436562334605%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653832607582046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09718787470024637%")
  },
  View_1864_5806: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("186.74863387978144%"),
    backgroundColor: "rgba(54, 54, 54, 1)"
  },
  ImageBackground_1864_5807: {
    width: wp("1.7985611510791366%"),
    minWidth: wp("1.7985611510791366%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.155875299760192%"),
    top: hp("190.1639344262295%"),
    resizeMode: "cover"
  },
  View_1864_5808: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("201.36612021857925%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_5809: {
    width: wp("27.218225419664265%"),
    minWidth: wp("27.218225419664265%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.45083932853717%"),
    top: hp("202.8688524590164%"),
    justifyContent: "flex-start"
  },
  Text_1864_5809: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5810: {
    width: wp("34.77218225419664%"),
    minWidth: wp("34.77218225419664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.633093525179856%"),
    top: hp("190.1639344262295%"),
    justifyContent: "flex-start"
  },
  Text_1864_5810: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5811: {
    width: wp("46.52278177458034%"),
    minWidth: wp("46.52278177458034%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.633093525179856%"),
    top: hp("194.39890710382514%"),
    justifyContent: "flex-start"
  },
  Text_1864_5811: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_5812: {
    width: wp("2.3980815347721824%"),
    minWidth: wp("2.3980815347721824%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.916067146282973%"),
    top: hp("194.2622950819672%"),
    resizeMode: "cover"
  },
  View_1864_5813: {
    width: wp("2.9197978744689794%"),
    minWidth: wp("2.9197978744689794%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.46762589928058%"),
    top: hp("191.80327868852459%")
  },
  View_1864_5814: {
    width: wp("2.9197978744689794%"),
    minWidth: wp("2.9197978744689794%"),
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
  ImageBackground_1864_5815: {
    width: wp("2.73436562334605%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653832607582046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09718787470023926%")
  },
  View_1864_5818: {
    width: wp("2.9198541343926814%"),
    minWidth: wp("2.9198541343926814%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.94244604316546%"),
    top: hp("191.9398907103825%")
  },
  View_1864_5819: {
    width: wp("2.9197978744689794%"),
    minWidth: wp("2.9197978744689794%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_5820: {
    width: wp("2.91941183076488%"),
    height: hp("2.918653019139024%"),
    top: hp("0.22179442025273488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5821: {
    width: wp("2.91941183076488%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5822: {
    width: wp("2.91941183076488%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5825: {
    width: wp("2.9197978744689794%"),
    minWidth: wp("2.9197978744689794%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.08425134892086%"),
    top: hp("191.9398907103825%")
  },
  View_1864_5826: {
    width: wp("2.9197978744689794%"),
    minWidth: wp("2.9197978744689794%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_5827: {
    width: wp("2.911914166786688%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5828: {
    width: wp("2.911914166786688%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5831: {
    width: wp("2.9198708294106903%"),
    minWidth: wp("2.9198708294106903%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.29256594724221%"),
    top: hp("191.9398907103825%")
  },
  View_1864_5832: {
    width: wp("2.9197978744689794%"),
    minWidth: wp("2.9197978744689794%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1864_5833: {
    width: wp("2.9197978744689794%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5834: {
    width: wp("2.9197978744689794%"),
    minWidth: wp("2.9197978744689794%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.40767386091127%"),
    top: hp("191.9398907103825%")
  },
  View_1864_5835: {
    width: wp("2.9197978744689794%"),
    minWidth: wp("2.9197978744689794%"),
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
  View_1864_5836: {
    width: wp("2.5304908660961853%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.1700979764344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1946099370503589%")
  },
  ImageBackground_1864_5837: {
    width: wp("2.5304908660961853%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5844: {
    width: wp("40.7673860911271%"),
    minWidth: wp("40.7673860911271%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.916067146282973%"),
    top: hp("107.65027322404373%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_5845: {
    width: wp("40.7673860911271%"),
    minWidth: wp("40.7673860911271%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.08153477218225%"),
    top: hp("107.65027322404373%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_5846: {
    width: wp("40.7673860911271%"),
    minWidth: wp("40.7673860911271%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.916067146282973%"),
    top: hp("137.8415300546448%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_5847: {
    width: wp("6.594724220623502%"),
    height: hp("7.5136612021857925%"),
    top: hp("196.17486338797815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.12709832134293%")
  },
  ImageBackground_1864_5848: {
    width: wp("6.594724220623502%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5866: {
    width: wp("15.347721822541965%"),
    minWidth: wp("15.347721822541965%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.62589928057554%"),
    top: hp("110.38251366120218%"),
    justifyContent: "flex-start"
  },
  Text_1864_5866: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5867: {
    width: wp("31.894484412470025%"),
    minWidth: wp("31.894484412470025%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.352517985611511%"),
    top: hp("119.26229508196722%")
  },
  View_1864_5868: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5869: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5870: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5871: {
    width: wp("1.1464345369407598%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1922200520833144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.106499175659472%")
  },
  ImageBackground_1864_5872: {
    width: wp("1.1278559549821079%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.106499175659472%")
  },
  ImageBackground_1864_5873: {
    width: wp("0.2423969675882829%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.780275779376497%")
  },
  ImageBackground_1864_5874: {
    width: wp("0.2423359907502465%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.336921088129497%")
  },
  ImageBackground_1864_5875: {
    width: wp("5.610106031385829%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.667809502398081%")
  },
  View_1864_5884: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.745803357314145%")
  },
  ImageBackground_1864_5885: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5889: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.745803357314145%")
  },
  View_1864_5890: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5891: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5892: {
    width: wp("1.9383533395451606%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.710722047362111%")
  },
  ImageBackground_1864_5893: {
    width: wp("5.610059376814954%"),
    height: hp("1.132476134378402%"),
    top: hp("1.92103985228826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.667809502398086%")
  },
  View_1864_5902: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5903: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5921: {
    width: wp("16.18705035971223%"),
    minWidth: wp("16.18705035971223%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.431654676258994%"),
    top: hp("110.38251366120218%"),
    justifyContent: "flex-start"
  },
  Text_1864_5921: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5922: {
    width: wp("31.894484412470025%"),
    minWidth: wp("31.894484412470025%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.51798561151079%"),
    top: hp("119.26229508196722%")
  },
  View_1864_5923: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5924: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5925: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5926: {
    width: wp("1.1464345369407598%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1922200520833144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.106499175659472%")
  },
  ImageBackground_1864_5927: {
    width: wp("1.1278559549821079%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.106499175659472%")
  },
  ImageBackground_1864_5928: {
    width: wp("0.2423969675882829%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7802757793765025%")
  },
  ImageBackground_1864_5929: {
    width: wp("0.2423359907502465%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.336921088129493%")
  },
  ImageBackground_1864_5930: {
    width: wp("5.610106031385829%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.667809502398093%")
  },
  View_1864_5939: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.745803357314152%")
  },
  ImageBackground_1864_5940: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5944: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.745803357314152%")
  },
  View_1864_5945: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5946: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5947: {
    width: wp("1.9383533395451606%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.710722047362111%")
  },
  ImageBackground_1864_5948: {
    width: wp("5.610059376814954%"),
    height: hp("1.132476134378402%"),
    top: hp("1.92103985228826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.667809502398072%")
  },
  View_1864_5957: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5958: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5976: {
    width: wp("31.894484412470025%"),
    minWidth: wp("31.894484412470025%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.352517985611511%"),
    top: hp("140.5737704918033%")
  },
  View_1864_5977: {
    width: wp("11.750599520383693%"),
    minWidth: wp("11.750599520383693%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.071942446043165%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_5977: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_5978: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.745803357314145%")
  },
  ImageBackground_1864_5979: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_5983: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_5984: {
    width: wp("14.148681055155876%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6002: {
    width: wp("36.930455635491604%"),
    minWidth: wp("36.930455635491604%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.796163069544365%"),
    top: hp("26.50273224043716%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_6003: {
    width: wp("2.3980815347721824%"),
    minWidth: wp("2.3980815347721824%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.29016786570744%"),
    top: hp("31.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_6004: {
    width: wp("2.3980815347721824%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_6005: {
    width: wp("2.3980815347721824%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6029: {
    width: wp("2.3980815347721824%"),
    minWidth: wp("2.3980815347721824%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.29016786570744%"),
    top: hp("39.07103825136612%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_6030: {
    width: wp("2.3980815347721824%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_6031: {
    width: wp("2.3980815347721824%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_6055: {
    width: wp("12.709832134292565%"),
    minWidth: wp("12.709832134292565%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.71462829736211%"),
    top: hp("30.737704918032787%"),
    justifyContent: "center"
  },
  Text_1864_6055: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6056: {
    width: wp("10.911270983213429%"),
    minWidth: wp("10.911270983213429%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.82494004796163%"),
    top: hp("44.39890710382514%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_6057: {
    width: wp("5.875299760191846%"),
    minWidth: wp("5.875299760191846%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.34292565947242%"),
    top: hp("45.62841530054645%"),
    justifyContent: "center"
  },
  Text_1864_6057: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_6058: {
    width: wp("14.748201438848922%"),
    minWidth: wp("14.748201438848922%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.954436450839328%"),
    top: hp("38.66120218579235%"),
    justifyContent: "center"
  },
  Text_1864_6058: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_6059: {
    width: wp("29.61630695443645%"),
    minWidth: wp("29.61630695443645%"),
    height: hp("0.0000028020826033494675%"),
    minHeight: hp("0.0000028020826033494675%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.954436450839328%"),
    top: hp("34.01639344262295%")
  },
  ImageBackground_1864_6060: {
    width: wp("29.61630695443645%"),
    minWidth: wp("29.61630695443645%"),
    height: hp("0.0000028020826033494675%"),
    minHeight: hp("0.0000028020826033494675%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.954436450839328%"),
    top: hp("41.80327868852459%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
