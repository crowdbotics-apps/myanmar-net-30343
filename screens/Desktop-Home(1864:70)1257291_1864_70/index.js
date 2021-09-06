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
      <View style={styles.View_1864_71} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_72}
      />
      <View style={styles.View_1864_73}>
        <Text style={styles.Text_1864_73}>423665935</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5121/cf5b/9f99cb6b2c6b312b88eaf3a8dc8c95c7"
        }}
        style={styles.ImageBackground_1864_74}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ff7/a49f/71175f7311fe0814b08233413ae56ef7"
        }}
        style={styles.ImageBackground_1864_75}
      />
      <View style={styles.View_1864_76} />
      <View style={styles.View_1864_77}>
        <Text style={styles.Text_1864_77}>Balance : 100,000 Ks</Text>
      </View>
      <View style={styles.View_1864_78} />
      <View style={styles.View_1864_79}>
        <View style={styles.View_1864_80}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd13/907f/8fe5164501e59a46ba41fd61456a886c"
            }}
            style={styles.ImageBackground_1864_81}
          />
        </View>
      </View>
      <View style={styles.View_1864_105}>
        <View style={styles.View_1864_106}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd13/907f/8fe5164501e59a46ba41fd61456a886c"
            }}
            style={styles.ImageBackground_1864_107}
          />
        </View>
      </View>
      <View style={styles.View_1864_131}>
        <Text style={styles.Text_1864_131}>Account Number</Text>
      </View>
      <View style={styles.View_1864_132} />
      <View style={styles.View_1864_133}>
        <Text style={styles.Text_1864_133}>Top up</Text>
      </View>
      <View style={styles.View_1864_134}>
        <Text style={styles.Text_1864_134}>xxxx-xxxx-xxxx-xxxx</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e96/1d78/658f6050049ee0e6d9912e8da1a81eaa"
        }}
        style={styles.ImageBackground_1864_135}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e96/1d78/658f6050049ee0e6d9912e8da1a81eaa"
        }}
        style={styles.ImageBackground_1864_136}
      />
      <View style={styles.View_1864_137} />
      <View style={styles.View_1864_138} />
      <View style={styles.View_1864_139}>
        <Text style={styles.Text_1864_139}>Maximum speed</Text>
      </View>
      <View style={styles.View_1864_140}>
        <Text style={styles.Text_1864_140}>Credit</Text>
      </View>
      <View style={styles.View_1864_141}>
        <Text style={styles.Text_1864_141}>10Mbps</Text>
      </View>
      <View style={styles.View_1864_142}>
        <Text style={styles.Text_1864_142}>2000Ks</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672e/54cc/703e70ec85130415365dea83fc1ad7fa"
        }}
        style={styles.ImageBackground_1864_143}
      />
      <View style={styles.View_1864_144} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_145}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_146}
      />
      <View style={styles.View_1864_147}>
        <Text style={styles.Text_1864_147}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_148}>
        <Text style={styles.Text_1864_148}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_149}>
        <Text style={styles.Text_1864_149}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_150}>
        <Text style={styles.Text_1864_150}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_151}>
        <Text style={styles.Text_1864_151}>11 MB</Text>
      </View>
      <View style={styles.View_1864_152}>
        <Text style={styles.Text_1864_152}>11 MB</Text>
      </View>
      <View style={styles.View_1864_153}>
        <Text style={styles.Text_1864_153}>2020-02-01</Text>
      </View>
      <View style={styles.View_1864_154}>
        <Text style={styles.Text_1864_154}>2020-02-01</Text>
      </View>
      <View style={styles.View_1864_155}>
        <Text style={styles.Text_1864_155}>Data 3 GB</Text>
      </View>
      <View style={styles.View_1864_156}>
        <Text style={styles.Text_1864_156}>Data 1 GB</Text>
      </View>
      <View style={styles.View_1864_157}>
        <Text style={styles.Text_1864_157}>Active Packs (3)</Text>
      </View>
      <View style={styles.View_1864_158}>
        <Text style={styles.Text_1864_158}>Internet</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84df/ee86/5287bc2dea70e556fd4244629d1370cd"
        }}
        style={styles.ImageBackground_1864_159}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/1f9a/fb0e0f3445d26610c6d076f222ca6c9a"
        }}
        style={styles.ImageBackground_1864_160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/1f9a/fb0e0f3445d26610c6d076f222ca6c9a"
        }}
        style={styles.ImageBackground_1864_161}
      />
      <View style={styles.View_1864_162} />
      <View style={styles.View_1864_163}>
        <Text style={styles.Text_1864_163}>Home</Text>
      </View>
      <View style={styles.View_1864_164}>
        <Text style={styles.Text_1864_164}>Packages</Text>
      </View>
      <View style={styles.View_1864_165}>
        <Text style={styles.Text_1864_165}>News</Text>
      </View>
      <View style={styles.View_1864_166} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a9/ae02/e884897105804dcc81810006e5be6c92"
        }}
        style={styles.ImageBackground_1864_167}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6833/3d7b/b3640942fa7182bc37317bd23df7e8db"
        }}
        style={styles.ImageBackground_1864_168}
      />
      <View style={styles.View_1864_169}>
        <Text style={styles.Text_1864_169}>Eng</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a0/6689/02fc154db7272f3035351e6858c578fd"
        }}
        style={styles.ImageBackground_1864_170}
      />
      <View style={styles.View_1864_191}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_192}
        />
      </View>
      <View style={styles.View_1864_194} />
      <View style={styles.View_1864_195}>
        <Text style={styles.Text_1864_195}>Recommendations</Text>
      </View>
      <View style={styles.View_1864_196}>
        <Text style={styles.Text_1864_196}>See all</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec4e/b91c/c9b443eaa8488ef24f09ae513071f0d0"
        }}
        style={styles.ImageBackground_1864_197}
      />
      <View style={styles.View_1864_198} />
      <View style={styles.View_1864_199}>
        <Text style={styles.Text_1864_199}>Buy</Text>
      </View>
      <View style={styles.View_1864_200}>
        <View style={styles.View_1864_201} />
        <View style={styles.View_1864_202}>
          <Text style={styles.Text_1864_202}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_203}>
        <View style={styles.View_1864_204} />
        <View style={styles.View_1864_205}>
          <Text style={styles.Text_1864_205}>Buy</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec4e/b91c/c9b443eaa8488ef24f09ae513071f0d0"
        }}
        style={styles.ImageBackground_1864_206}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a9e/8e09/54257e6ab20942241bc45bf350bd9f23"
        }}
        style={styles.ImageBackground_1864_207}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a06/fc18/31f364592b359e5fa495bf8b782634a2"
        }}
        style={styles.ImageBackground_1864_208}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3985/0fe9/5956d327c08a6698537050d1ed1e7efe"
        }}
        style={styles.ImageBackground_1864_213}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ab/5a9a/106fbc3c571974eb3b6fde115921fb8a"
        }}
        style={styles.ImageBackground_1864_214}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b259/65cd/8db78b44314cf81f471413fd52c5b53f"
        }}
        style={styles.ImageBackground_1864_215}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/b369/5f7db112830681172f117adc3bd909ea"
        }}
        style={styles.ImageBackground_1864_216}
      />
      <View style={styles.View_1864_217} />
      <View style={styles.View_1864_218} />
      <View style={styles.View_1864_219} />
      <View style={styles.View_1864_220}>
        <Text style={styles.Text_1864_220}>Download Myanmar Net app</Text>
      </View>
      <View style={styles.View_1864_221}>
        <Text style={styles.Text_1864_221}>Download Myanmar Cast app</Text>
      </View>
      <View style={styles.View_1864_222} />
      <View style={styles.View_1864_223} />
      <View style={styles.View_1864_224}>
        <Text style={styles.Text_1864_224}>
          Myanmar Net © 2021. All Rights Reserved.
        </Text>
      </View>
      <View style={styles.View_1864_225}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
          }}
          style={styles.ImageBackground_1864_226}
        />
        <View style={styles.View_1864_227}>
          <Text style={styles.Text_1864_227}>
            09-765338440 (9:00 AM to 7:30 PM Everyday)
          </Text>
        </View>
        <View style={styles.View_1864_228}>
          <Text style={styles.Text_1864_228}>
            No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
          }}
          style={styles.ImageBackground_1864_229}
        />
      </View>
      <View style={styles.View_1864_230}>
        <View style={styles.View_1864_231}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
            }}
            style={styles.ImageBackground_1864_232}
          />
        </View>
      </View>
      <View style={styles.View_1864_235}>
        <View style={styles.View_1864_236} />
        <View style={styles.View_1864_237}>
          <View style={styles.View_1864_238}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
              }}
              style={styles.ImageBackground_1864_239}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_242}>
        <View style={styles.View_1864_243} />
        <View style={styles.View_1864_244}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
            }}
            style={styles.ImageBackground_1864_245}
          />
        </View>
      </View>
      <View style={styles.View_1864_248}>
        <View style={styles.View_1864_249} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
          }}
          style={styles.ImageBackground_1864_250}
        />
      </View>
      <View style={styles.View_1864_251}>
        <View style={styles.View_1864_252}>
          <View style={styles.View_1864_253}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff5/fbef/0efc44e786157dd9fbf5616a13085dfe"
              }}
              style={styles.ImageBackground_1864_254}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_261}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_262}
        />
      </View>
      <View style={styles.View_1864_280}>
        <View style={styles.View_1864_281}>
          <Text style={styles.Text_1864_281}>Download My Canal app</Text>
        </View>
        <View style={styles.View_1864_282}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee49/1937/d705603dbcbe65d3e21dcf89a704471a"
            }}
            style={styles.ImageBackground_1864_283}
          />
        </View>
        <View style={styles.View_1864_287}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_288}
          />
        </View>
      </View>
      <View style={styles.View_1864_306}>
        <View style={styles.View_1864_307}>
          <View style={styles.View_1864_308}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_309}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_310}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_311}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_312}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_313}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/6a1d/24b97c4c5ff8e5c21fc9c0ff006c9285"
              }}
              style={styles.ImageBackground_1864_314}
            />
          </View>
        </View>
        <View style={styles.View_1864_323}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_324}
          />
        </View>
        <View style={styles.View_1864_328}>
          <View style={styles.View_1864_329}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_330}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_331}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bd/dda8/3a91b8d0fbcdb7d2d7a6254666cb3097"
              }}
              style={styles.ImageBackground_1864_332}
            />
          </View>
        </View>
        <View style={styles.View_1864_341}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_342}
          />
        </View>
      </View>
      <View style={styles.View_1864_360}>
        <View style={styles.View_1864_361}>
          <View style={styles.View_1864_362}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_363}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_364}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_365}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_366}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_367}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/6a1d/24b97c4c5ff8e5c21fc9c0ff006c9285"
              }}
              style={styles.ImageBackground_1864_368}
            />
          </View>
        </View>
        <View style={styles.View_1864_377}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_378}
          />
        </View>
        <View style={styles.View_1864_382}>
          <View style={styles.View_1864_383}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_384}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_385}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0052/20f4/563bf3c61a59815ad176569b0660ac94"
              }}
              style={styles.ImageBackground_1864_386}
            />
          </View>
        </View>
        <View style={styles.View_1864_395}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_396}
          />
        </View>
      </View>
      <View style={styles.View_1864_414}>
        <Text style={styles.Text_1864_414}>Account</Text>
      </View>
      <View style={styles.View_1864_415}>
        <Text style={styles.Text_1864_415}>FAQs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/0c01/88539a39a3670d9f8662e790074e8512"
        }}
        style={styles.ImageBackground_1864_416}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("184.56284153005464%") },
  View_1864_71: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("53.96174863387978%"),
    minHeight: hp("53.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  ImageBackground_1864_72: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.31944444444444%"),
    top: hp("12.978142076502733%"),
    resizeMode: "cover"
  },
  View_1864_73: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("13.387978142076504%"),
    justifyContent: "flex-start"
  },
  Text_1864_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_74: {
    width: wp("1.8057105276319714%"),
    minWidth: wp("1.8057105276319714%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("12.978142076502733%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_75: {
    width: wp("3.856809404161241%"),
    minWidth: wp("3.856809404161241%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.52777777777778%"),
    top: hp("7.5136612021857925%")
  },
  View_1864_76: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("18.71584699453552%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_77: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("20.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1864_77: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_78: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("26.912568306010932%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_79: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.625%"),
    top: hp("31.693989071038253%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_80: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_81: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_105: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.625%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_106: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_107: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_131: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.305555555555555%"),
    top: hp("31.147540983606557%"),
    justifyContent: "center"
  },
  Text_1864_131: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_132: {
    width: wp("6.319444444444445%"),
    minWidth: wp("6.319444444444445%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("44.67213114754098%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_133: {
    width: wp("3.4027777777777777%"),
    minWidth: wp("3.4027777777777777%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.458333333333332%"),
    top: hp("45.90163934426229%"),
    justifyContent: "center"
  },
  Text_1864_133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_134: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("39.07103825136612%"),
    justifyContent: "center"
  },
  Text_1864_134: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_135: {
    width: wp("25.694444444444443%"),
    minWidth: wp("25.694444444444443%"),
    height: hp("0.000004197451739433309%"),
    minHeight: hp("0.000004197451739433309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("34.42622950819672%")
  },
  ImageBackground_1864_136: {
    width: wp("25.694444444444443%"),
    minWidth: wp("25.694444444444443%"),
    height: hp("0.000004197451739433309%"),
    minHeight: hp("0.000004197451739433309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("42.21311475409836%")
  },
  View_1864_137: {
    width: wp("40.97222222222222%"),
    minWidth: wp("40.97222222222222%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("18.579234972677597%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_138: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("53.278688524590166%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_139: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.166666666666664%"),
    top: hp("20.76502732240437%"),
    justifyContent: "flex-start"
  },
  Text_1864_139: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_140: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.374999999999998%"),
    top: hp("55.32786885245902%"),
    justifyContent: "flex-start"
  },
  Text_1864_140: {
    color: "rgba(173, 52, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_141: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.31944444444444%"),
    top: hp("20.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1864_141: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_142: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.84722222222222%"),
    top: hp("55.05464480874317%"),
    justifyContent: "flex-start"
  },
  Text_1864_142: {
    color: "rgba(173, 52, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_143: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("20.491803278688526%"),
    resizeMode: "cover"
  },
  View_1864_144: {
    width: wp("40.97222222222222%"),
    minWidth: wp("40.97222222222222%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("26.775956284153008%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1864_145: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.916666666666664%"),
    top: hp("34.97267759562842%")
  },
  ImageBackground_1864_146: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.97222222222223%"),
    top: hp("34.97267759562842%")
  },
  View_1864_147: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("37.56830601092896%"),
    justifyContent: "flex-start"
  },
  Text_1864_147: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_148: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("37.56830601092896%"),
    justifyContent: "flex-start"
  },
  Text_1864_148: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_149: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("40.57377049180328%"),
    justifyContent: "flex-start"
  },
  Text_1864_149: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_150: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("40.57377049180328%"),
    justifyContent: "flex-start"
  },
  Text_1864_150: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_151: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.88888888888889%"),
    top: hp("37.704918032786885%"),
    justifyContent: "flex-start"
  },
  Text_1864_151: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_152: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.94444444444444%"),
    top: hp("37.704918032786885%"),
    justifyContent: "flex-start"
  },
  Text_1864_152: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_153: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80555555555556%"),
    top: hp("40.57377049180328%"),
    justifyContent: "flex-start"
  },
  Text_1864_153: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_154: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.86111111111111%"),
    top: hp("40.57377049180328%"),
    justifyContent: "flex-start"
  },
  Text_1864_154: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_155: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("34.42622950819672%"),
    justifyContent: "flex-start"
  },
  Text_1864_155: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_156: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("34.42622950819672%"),
    justifyContent: "flex-start"
  },
  Text_1864_156: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_157: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("29.508196721311474%"),
    justifyContent: "flex-start"
  },
  Text_1864_157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_158: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.90277777777778%"),
    top: hp("13.524590163934427%"),
    justifyContent: "flex-start"
  },
  Text_1864_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_159: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("46.58489956881831%"),
    minHeight: hp("46.58489956881831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.40972222222222%"),
    top: hp("13.524390048668034%")
  },
  ImageBackground_1864_160: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8.343138460253106%"),
    minHeight: hp("8.343138460253106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.02777777777777%"),
    top: hp("34.56290823514344%")
  },
  ImageBackground_1864_161: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8.343138460253106%"),
    minHeight: hp("8.343138460253106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.80555555555556%"),
    top: hp("34.69952025700137%")
  },
  View_1864_162: {
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
  View_1864_163: {
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
  Text_1864_163: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_164: {
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
  Text_1864_164: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_165: {
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
  Text_1864_165: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_166: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%"),
    top: hp("34.15300546448087%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1864_167: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.81944444444444%"),
    top: hp("37.02185792349727%")
  },
  ImageBackground_1864_168: {
    width: wp("0.5555555555555556%"),
    height: hp("1.873536318377719%"),
    top: hp("37.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.375%")
  },
  View_1864_169: {
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
  Text_1864_169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_170: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_191: {
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
  ImageBackground_1864_192: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_194: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("57.786885245901644%"),
    minHeight: hp("57.786885245901644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104.50819672131149%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_1864_195: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.402777777777777%"),
    top: hp("68.30601092896174%"),
    justifyContent: "flex-start"
  },
  Text_1864_195: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_196: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.54166666666667%"),
    top: hp("68.85245901639344%"),
    justifyContent: "flex-start"
  },
  Text_1864_196: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_197: {
    width: wp("15.625%"),
    minWidth: wp("15.625%"),
    height: hp("19.18885694826887%"),
    minHeight: hp("19.18885694826887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("74.4535519125683%"),
    resizeMode: "cover"
  },
  View_1864_198: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.333333333333332%"),
    top: hp("95.49180327868852%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_199: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("2.542501460007631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.069444444444446%"),
    top: hp("96.72131147540983%"),
    justifyContent: "center"
  },
  Text_1864_199: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_200: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.083333333333336%"),
    top: hp("95.49180327868852%")
  },
  View_1864_201: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
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
  View_1864_202: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("3.0737702312365256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111072%"),
    top: hp("0.9221311475409806%"),
    justifyContent: "center"
  },
  Text_1864_202: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_203: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.90277777777778%"),
    top: hp("95.49180327868852%")
  },
  View_1864_204: {
    width: wp("5.492862595452203%"),
    minWidth: wp("5.492862595452203%"),
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
  View_1864_205: {
    width: wp("1.874035464392768%"),
    minWidth: wp("1.874035464392768%"),
    minHeight: hp("3.0737702312365256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8093532986111072%"),
    top: hp("0.9221311475409806%"),
    justifyContent: "center"
  },
  Text_1864_205: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_206: {
    width: wp("15.625%"),
    minWidth: wp("15.625%"),
    height: hp("19.18885694826887%"),
    minHeight: hp("19.18885694826887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.83333333333333%"),
    top: hp("74.4535519125683%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_207: {
    width: wp("15.625%"),
    minWidth: wp("15.625%"),
    height: hp("19.18885694826887%"),
    minHeight: hp("19.18885694826887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.083333333333336%"),
    top: hp("74.4535519125683%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_208: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.125%"),
    top: hp("157.24043715846994%")
  },
  ImageBackground_1864_213: {
    width: wp("17.430555555555554%"),
    minWidth: wp("17.430555555555554%"),
    height: hp("13.71584720298892%"),
    minHeight: hp("13.71584720298892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.402777777777777%"),
    top: hp("140.7103825136612%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_214: {
    width: wp("17.430555555555554%"),
    minWidth: wp("17.430555555555554%"),
    height: hp("13.71584720298892%"),
    minHeight: hp("13.71584720298892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.22222222222222%"),
    top: hp("140.7103825136612%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_215: {
    width: wp("17.430555555555554%"),
    minWidth: wp("17.430555555555554%"),
    height: hp("13.71584720298892%"),
    minHeight: hp("13.71584720298892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.97222222222222%"),
    top: hp("140.7103825136612%"),
    resizeMode: "cover"
  },
  ImageBackground_1864_216: {
    width: wp("17.430555555555554%"),
    minWidth: wp("17.430555555555554%"),
    height: hp("13.71584720298892%"),
    minHeight: hp("13.71584720298892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.65277777777777%"),
    top: hp("140.7103825136612%"),
    resizeMode: "cover"
  },
  View_1864_217: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.402777777777777%"),
    top: hp("108.60655737704919%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_218: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("108.60655737704919%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_219: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.40277777777777%"),
    top: hp("108.60655737704919%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_220: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.76388888888889%"),
    top: hp("111.33879781420765%"),
    justifyContent: "flex-start"
  },
  Text_1864_220: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_221: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.55555555555556%"),
    top: hp("111.33879781420765%"),
    justifyContent: "flex-start"
  },
  Text_1864_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_222: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("165.0273224043716%"),
    backgroundColor: "rgba(54, 54, 54, 1)"
  },
  View_1864_223: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("179.6448087431694%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_224: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.15277777777778%"),
    top: hp("181.14754098360655%"),
    justifyContent: "flex-start"
  },
  Text_1864_224: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_225: {
    width: wp("29.097222222222225%"),
    minWidth: wp("29.097222222222225%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.694444444444445%"),
    top: hp("169.12568306010928%")
  },
  ImageBackground_1864_226: {
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
  View_1864_227: {
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
  Text_1864_227: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_228: {
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
  Text_1864_228: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_229: {
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
  View_1864_230: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.76388888888889%"),
    top: hp("170.59426229508196%")
  },
  View_1864_231: {
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
  ImageBackground_1864_232: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653832607582046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.056287977430557135%")
  },
  View_1864_235: {
    width: wp("1.6910821861690943%"),
    minWidth: wp("1.6910821861690943%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28564453125%"),
    top: hp("170.59426229508196%")
  },
  View_1864_236: {
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
  View_1864_237: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.22179442025273488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_238: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_239: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_242: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.80712890625%"),
    top: hp("170.59426229508196%")
  },
  View_1864_243: {
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
  View_1864_244: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_245: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_248: {
    width: wp("1.6910918553670249%"),
    minWidth: wp("1.6910918553670249%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.32874891493056%"),
    top: hp("170.59426229508196%")
  },
  View_1864_249: {
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
  ImageBackground_1864_250: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_251: {
    width: wp("1.6910496022966175%"),
    minWidth: wp("1.6910496022966175%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.85064019097223%"),
    top: hp("170.59426229508196%")
  },
  View_1864_252: {
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
  View_1864_253: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.17009797643444813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11271158854165719%")
  },
  ImageBackground_1864_254: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_261: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("172.95081967213116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_262: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_280: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.97222222222221%"),
    top: hp("111.33879781420765%")
  },
  View_1864_281: {
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
  Text_1864_281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_282: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777786%")
  },
  ImageBackground_1864_283: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_287: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_288: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_306: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.972222222222221%"),
    top: hp("120.21857923497268%")
  },
  View_1864_307: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_308: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_309: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_310: {
    width: wp("0.6639766693115234%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1922200520833428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7991807725694429%")
  },
  ImageBackground_1864_311: {
    width: wp("0.6532165739271376%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7991807725694429%")
  },
  ImageBackground_1864_312: {
    width: wp("0.14038824372821385%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6102430555555571%")
  },
  ImageBackground_1864_313: {
    width: wp("0.14035292797618443%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5118001302083357%")
  },
  ImageBackground_1864_314: {
    width: wp("3.249186409844292%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.282606336805557%")
  },
  View_1864_323: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  ImageBackground_1864_324: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_328: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  View_1864_329: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_330: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_331: {
    width: wp("1.1226296424865723%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5699598524305536%")
  },
  ImageBackground_1864_332: {
    width: wp("3.2491593890719943%"),
    height: hp("1.132476134378402%"),
    top: hp("1.92103985228826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.282606336805557%")
  },
  View_1864_341: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_342: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_360: {
    width: wp("18.47222222222222%"),
    minWidth: wp("18.47222222222222%"),
    height: hp("13.658502714230064%"),
    minHeight: hp("13.658502714230064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.97222222222222%"),
    top: hp("120.21857923497268%")
  },
  View_1864_361: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_362: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_363: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_364: {
    width: wp("0.6639766693115234%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1922200520833428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.79918077256945%")
  },
  ImageBackground_1864_365: {
    width: wp("0.6532165739271376%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.79918077256945%")
  },
  ImageBackground_1864_366: {
    width: wp("0.14038824372821385%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6102430555555571%")
  },
  ImageBackground_1864_367: {
    width: wp("0.14035292797618443%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5118001302083357%")
  },
  ImageBackground_1864_368: {
    width: wp("3.249186409844292%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.282606336805557%")
  },
  View_1864_377: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777771%")
  },
  ImageBackground_1864_378: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_382: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777771%")
  },
  View_1864_383: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_384: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_385: {
    width: wp("1.1226296424865723%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5699598524305642%")
  },
  ImageBackground_1864_386: {
    width: wp("3.2491593890719943%"),
    height: hp("1.132476134378402%"),
    top: hp("1.92103985228826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2826063368055642%")
  },
  View_1864_395: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_396: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_414: {
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
  Text_1864_414: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_415: {
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
  Text_1864_415: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_416: {
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
