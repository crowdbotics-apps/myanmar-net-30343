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
      <View style={styles.View_1864_418} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_419}
      />
      <View style={styles.View_1864_420}>
        <Text style={styles.Text_1864_420}>423665935</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5121/cf5b/9f99cb6b2c6b312b88eaf3a8dc8c95c7"
        }}
        style={styles.ImageBackground_1864_421}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ff7/a49f/71175f7311fe0814b08233413ae56ef7"
        }}
        style={styles.ImageBackground_1864_422}
      />
      <View style={styles.View_1864_423} />
      <View style={styles.View_1864_424}>
        <Text style={styles.Text_1864_424}>Balance : 100,000 Ks</Text>
      </View>
      <View style={styles.View_1864_425} />
      <View style={styles.View_1864_426}>
        <View style={styles.View_1864_427}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd13/907f/8fe5164501e59a46ba41fd61456a886c"
            }}
            style={styles.ImageBackground_1864_428}
          />
        </View>
      </View>
      <View style={styles.View_1864_452}>
        <View style={styles.View_1864_453}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd13/907f/8fe5164501e59a46ba41fd61456a886c"
            }}
            style={styles.ImageBackground_1864_454}
          />
        </View>
      </View>
      <View style={styles.View_1864_478}>
        <Text style={styles.Text_1864_478}>Account Number</Text>
      </View>
      <View style={styles.View_1864_479} />
      <View style={styles.View_1864_480}>
        <Text style={styles.Text_1864_480}>Top up</Text>
      </View>
      <View style={styles.View_1864_481}>
        <Text style={styles.Text_1864_481}>xxxx-xxxx-xxxx-xxxx</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e96/1d78/658f6050049ee0e6d9912e8da1a81eaa"
        }}
        style={styles.ImageBackground_1864_482}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e96/1d78/658f6050049ee0e6d9912e8da1a81eaa"
        }}
        style={styles.ImageBackground_1864_483}
      />
      <View style={styles.View_1864_484} />
      <View style={styles.View_1864_485} />
      <View style={styles.View_1864_486}>
        <Text style={styles.Text_1864_486}>Maximum speed</Text>
      </View>
      <View style={styles.View_1864_487}>
        <Text style={styles.Text_1864_487}>Credit</Text>
      </View>
      <View style={styles.View_1864_488}>
        <Text style={styles.Text_1864_488}>10Mbps</Text>
      </View>
      <View style={styles.View_1864_489}>
        <Text style={styles.Text_1864_489}>2000Ks</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672e/54cc/703e70ec85130415365dea83fc1ad7fa"
        }}
        style={styles.ImageBackground_1864_490}
      />
      <View style={styles.View_1864_491} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_492}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9450/3d505673853d09b05199df5c89fbd54c"
        }}
        style={styles.ImageBackground_1864_493}
      />
      <View style={styles.View_1864_494}>
        <Text style={styles.Text_1864_494}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_495}>
        <Text style={styles.Text_1864_495}>Remaining Data : </Text>
      </View>
      <View style={styles.View_1864_496}>
        <Text style={styles.Text_1864_496}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_497}>
        <Text style={styles.Text_1864_497}>Expiration Date :</Text>
      </View>
      <View style={styles.View_1864_498}>
        <Text style={styles.Text_1864_498}>11 MB</Text>
      </View>
      <View style={styles.View_1864_499}>
        <Text style={styles.Text_1864_499}>11 MB</Text>
      </View>
      <View style={styles.View_1864_500}>
        <Text style={styles.Text_1864_500}>2020-02-01</Text>
      </View>
      <View style={styles.View_1864_501}>
        <Text style={styles.Text_1864_501}>2020-02-01</Text>
      </View>
      <View style={styles.View_1864_502}>
        <Text style={styles.Text_1864_502}>Data 3 GB</Text>
      </View>
      <View style={styles.View_1864_503}>
        <Text style={styles.Text_1864_503}>Data 1 GB</Text>
      </View>
      <View style={styles.View_1864_504}>
        <Text style={styles.Text_1864_504}>Active Packs (3)</Text>
      </View>
      <View style={styles.View_1864_505}>
        <Text style={styles.Text_1864_505}>Internet</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84df/ee86/5287bc2dea70e556fd4244629d1370cd"
        }}
        style={styles.ImageBackground_1864_506}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/1f9a/fb0e0f3445d26610c6d076f222ca6c9a"
        }}
        style={styles.ImageBackground_1864_507}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/1f9a/fb0e0f3445d26610c6d076f222ca6c9a"
        }}
        style={styles.ImageBackground_1864_508}
      />
      <View style={styles.View_1864_509} />
      <View style={styles.View_1864_510}>
        <Text style={styles.Text_1864_510}>Home</Text>
      </View>
      <View style={styles.View_1864_511}>
        <Text style={styles.Text_1864_511}>Packages</Text>
      </View>
      <View style={styles.View_1864_512}>
        <Text style={styles.Text_1864_512}>News</Text>
      </View>
      <View style={styles.View_1864_513} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a9/ae02/e884897105804dcc81810006e5be6c92"
        }}
        style={styles.ImageBackground_1864_514}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6833/3d7b/b3640942fa7182bc37317bd23df7e8db"
        }}
        style={styles.ImageBackground_1864_515}
      />
      <View style={styles.View_1864_516}>
        <Text style={styles.Text_1864_516}>Eng</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a0/6689/02fc154db7272f3035351e6858c578fd"
        }}
        style={styles.ImageBackground_1864_517}
      />
      <View style={styles.View_1864_538}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_539}
        />
      </View>
      <View style={styles.View_1864_541} />
      <View style={styles.View_1864_542}>
        <Text style={styles.Text_1864_542}>Recommendations</Text>
      </View>
      <View style={styles.View_1864_543}>
        <Text style={styles.Text_1864_543}>See all</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec4e/b91c/c9b443eaa8488ef24f09ae513071f0d0"
        }}
        style={styles.ImageBackground_1864_544}
      />
      <View style={styles.View_1864_545} />
      <View style={styles.View_1864_546}>
        <Text style={styles.Text_1864_546}>Buy</Text>
      </View>
      <View style={styles.View_1864_547}>
        <View style={styles.View_1864_548} />
        <View style={styles.View_1864_549}>
          <Text style={styles.Text_1864_549}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_1864_550}>
        <View style={styles.View_1864_551} />
        <View style={styles.View_1864_552}>
          <Text style={styles.Text_1864_552}>Buy</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec4e/b91c/c9b443eaa8488ef24f09ae513071f0d0"
        }}
        style={styles.ImageBackground_1864_553}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a9e/8e09/54257e6ab20942241bc45bf350bd9f23"
        }}
        style={styles.ImageBackground_1864_554}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a06/fc18/31f364592b359e5fa495bf8b782634a2"
        }}
        style={styles.ImageBackground_1864_555}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3985/0fe9/5956d327c08a6698537050d1ed1e7efe"
        }}
        style={styles.ImageBackground_1864_560}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ab/5a9a/106fbc3c571974eb3b6fde115921fb8a"
        }}
        style={styles.ImageBackground_1864_561}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b259/65cd/8db78b44314cf81f471413fd52c5b53f"
        }}
        style={styles.ImageBackground_1864_562}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/b369/5f7db112830681172f117adc3bd909ea"
        }}
        style={styles.ImageBackground_1864_563}
      />
      <View style={styles.View_1864_564} />
      <View style={styles.View_1864_565} />
      <View style={styles.View_1864_566} />
      <View style={styles.View_1864_567}>
        <Text style={styles.Text_1864_567}>Download Myanmar Net app</Text>
      </View>
      <View style={styles.View_1864_568}>
        <Text style={styles.Text_1864_568}>Download Myanmar Cast app</Text>
      </View>
      <View style={styles.View_1864_569} />
      <View style={styles.View_1864_570} />
      <View style={styles.View_1864_571}>
        <Text style={styles.Text_1864_571}>
          Myanmar Net © 2021. All Rights Reserved.
        </Text>
      </View>
      <View style={styles.View_1864_572}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/465d/b1ccc5209690ad07e7fa43844d7c3fad"
          }}
          style={styles.ImageBackground_1864_573}
        />
        <View style={styles.View_1864_574}>
          <Text style={styles.Text_1864_574}>
            09-765338440 (9:00 AM to 7:30 PM Everyday)
          </Text>
        </View>
        <View style={styles.View_1864_575}>
          <Text style={styles.Text_1864_575}>
            No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8392/df61/6cbf3957397a409e2249147d0f8bc90a"
          }}
          style={styles.ImageBackground_1864_576}
        />
      </View>
      <View style={styles.View_1864_577}>
        <View style={styles.View_1864_578}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
            }}
            style={styles.ImageBackground_1864_579}
          />
        </View>
      </View>
      <View style={styles.View_1864_582}>
        <View style={styles.View_1864_583} />
        <View style={styles.View_1864_584}>
          <View style={styles.View_1864_585}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
              }}
              style={styles.ImageBackground_1864_586}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_589}>
        <View style={styles.View_1864_590} />
        <View style={styles.View_1864_591}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
            }}
            style={styles.ImageBackground_1864_592}
          />
        </View>
      </View>
      <View style={styles.View_1864_595}>
        <View style={styles.View_1864_596} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
          }}
          style={styles.ImageBackground_1864_597}
        />
      </View>
      <View style={styles.View_1864_598}>
        <View style={styles.View_1864_599}>
          <View style={styles.View_1864_600}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff5/fbef/0efc44e786157dd9fbf5616a13085dfe"
              }}
              style={styles.ImageBackground_1864_601}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_608}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_609}
        />
      </View>
      <View style={styles.View_1864_627}>
        <View style={styles.View_1864_628}>
          <Text style={styles.Text_1864_628}>Download My Canal app</Text>
        </View>
        <View style={styles.View_1864_629}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee49/1937/d705603dbcbe65d3e21dcf89a704471a"
            }}
            style={styles.ImageBackground_1864_630}
          />
        </View>
        <View style={styles.View_1864_634}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_635}
          />
        </View>
      </View>
      <View style={styles.View_1864_653}>
        <View style={styles.View_1864_654}>
          <View style={styles.View_1864_655}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_657}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_658}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_659}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_660}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/6a1d/24b97c4c5ff8e5c21fc9c0ff006c9285"
              }}
              style={styles.ImageBackground_1864_661}
            />
          </View>
        </View>
        <View style={styles.View_1864_670}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_671}
          />
        </View>
        <View style={styles.View_1864_675}>
          <View style={styles.View_1864_676}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_677}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0052/20f4/563bf3c61a59815ad176569b0660ac94"
              }}
              style={styles.ImageBackground_1864_679}
            />
          </View>
        </View>
        <View style={styles.View_1864_688}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_689}
          />
        </View>
      </View>
      <View style={styles.View_1864_707}>
        <View style={styles.View_1864_708}>
          <View style={styles.View_1864_709}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bda/5cbb/6004a8e8e67f2f142a1782e86970412c"
              }}
              style={styles.ImageBackground_1864_710}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3e/0458/7cc69fffbd78db2252e68a8c336f8749"
              }}
              style={styles.ImageBackground_1864_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4641/1190/f0dd6904fdae4629a7fd4cfca8743599"
              }}
              style={styles.ImageBackground_1864_712}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c0/9dcd/b5e06e819b9c5664a7fcd92e36539746"
              }}
              style={styles.ImageBackground_1864_714}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/6a1d/24b97c4c5ff8e5c21fc9c0ff006c9285"
              }}
              style={styles.ImageBackground_1864_715}
            />
          </View>
        </View>
        <View style={styles.View_1864_724}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c1/7b4f/17740587b7b4456a8de69e39bf3aa770"
            }}
            style={styles.ImageBackground_1864_725}
          />
        </View>
        <View style={styles.View_1864_729}>
          <View style={styles.View_1864_730}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/bfa8/1f39bbceb854b9cc8cf863c1b1953dc5"
              }}
              style={styles.ImageBackground_1864_731}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb9/17d5/6fd5490bf8337f9f556d23d4bc864329"
              }}
              style={styles.ImageBackground_1864_732}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bd/dda8/3a91b8d0fbcdb7d2d7a6254666cb3097"
              }}
              style={styles.ImageBackground_1864_733}
            />
          </View>
        </View>
        <View style={styles.View_1864_742}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7910/25be/fc126aee8c0b4b17d70c16adb6e5ce47"
            }}
            style={styles.ImageBackground_1864_743}
          />
        </View>
      </View>
      <View style={styles.View_1864_761}>
        <Text style={styles.Text_1864_761}>Account</Text>
      </View>
      <View style={styles.View_1864_762}>
        <Text style={styles.Text_1864_762}>FAQs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/0c01/88539a39a3670d9f8662e790074e8512"
        }}
        style={styles.ImageBackground_1864_763}
      />
      <View style={styles.View_1864_764} />
      <View style={styles.View_1864_765}>
        <View style={styles.View_1864_766} />
        <View style={styles.View_1864_767}>
          <View style={styles.View_1864_768} />
          <View style={styles.View_1864_769} />
          <View style={styles.View_1864_770}>
            <Text style={styles.Text_1864_770}>Close</Text>
          </View>
          <View style={styles.View_1864_771}>
            <Text style={styles.Text_1864_771}>Buy packs</Text>
          </View>
        </View>
        <View style={styles.View_1864_772}>
          <Text style={styles.Text_1864_772}>Top up Successful !</Text>
        </View>
        <View style={styles.View_1864_773}>
          <Text style={styles.Text_1864_773}>1000 Ks</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd17/1f87/4b60f3959d538979a25145683d5a2513"
          }}
          style={styles.ImageBackground_1864_774}
        />
        <View style={styles.View_1864_775}>
          <View style={styles.View_1864_776}>
            <View style={styles.View_1864_777}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/281f/a80e/1040764e51bd37f8510115b33b0d2c44"
                }}
                style={styles.ImageBackground_1864_778}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("184.56284153005464%") },
  View_1864_418: {
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
  ImageBackground_1864_419: {
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
  View_1864_420: {
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
  Text_1864_420: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_421: {
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
  ImageBackground_1864_422: {
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
  View_1864_423: {
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
  View_1864_424: {
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
  Text_1864_424: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_425: {
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
  View_1864_426: {
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
  View_1864_427: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_428: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_452: {
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
  View_1864_453: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_454: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_478: {
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
  Text_1864_478: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_479: {
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
  View_1864_480: {
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
  Text_1864_480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_481: {
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
  Text_1864_481: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_482: {
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
  ImageBackground_1864_483: {
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
  View_1864_484: {
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
  View_1864_485: {
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
  View_1864_486: {
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
  Text_1864_486: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_487: {
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
  Text_1864_487: {
    color: "rgba(173, 52, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_488: {
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
  Text_1864_488: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_489: {
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
  Text_1864_489: {
    color: "rgba(173, 52, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_490: {
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
  View_1864_491: {
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
  ImageBackground_1864_492: {
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
  ImageBackground_1864_493: {
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
  View_1864_494: {
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
  Text_1864_494: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_495: {
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
  Text_1864_495: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_496: {
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
  Text_1864_496: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_497: {
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
  Text_1864_497: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_498: {
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
  Text_1864_498: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_499: {
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
  Text_1864_499: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_500: {
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
  Text_1864_500: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_501: {
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
  Text_1864_501: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_502: {
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
  Text_1864_502: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_503: {
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
  Text_1864_503: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_504: {
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
  Text_1864_504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_505: {
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
  Text_1864_505: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_506: {
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
  ImageBackground_1864_507: {
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
  ImageBackground_1864_508: {
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
  View_1864_509: {
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
  View_1864_510: {
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
  Text_1864_510: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_511: {
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
  Text_1864_511: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_512: {
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
  Text_1864_512: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_513: {
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
  ImageBackground_1864_514: {
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
  ImageBackground_1864_515: {
    width: wp("0.5555555555555556%"),
    height: hp("1.873536318377719%"),
    top: hp("37.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.375%")
  },
  View_1864_516: {
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
  Text_1864_516: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_517: {
    width: wp("11.11111111111111%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%")
  },
  View_1864_538: {
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
  ImageBackground_1864_539: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_541: {
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
  View_1864_542: {
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
  Text_1864_542: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_543: {
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
  Text_1864_543: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_544: {
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
  View_1864_545: {
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
  View_1864_546: {
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
  Text_1864_546: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_547: {
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
  View_1864_548: {
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
  View_1864_549: {
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
  Text_1864_549: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_550: {
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
  View_1864_551: {
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
  View_1864_552: {
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
  Text_1864_552: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_553: {
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
  ImageBackground_1864_554: {
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
  ImageBackground_1864_555: {
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
  ImageBackground_1864_560: {
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
  ImageBackground_1864_561: {
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
  ImageBackground_1864_562: {
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
  ImageBackground_1864_563: {
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
  View_1864_564: {
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
  View_1864_565: {
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
  View_1864_566: {
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
  View_1864_567: {
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
  Text_1864_567: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_568: {
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
  Text_1864_568: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_569: {
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
  View_1864_570: {
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
  View_1864_571: {
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
  Text_1864_571: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_572: {
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
  ImageBackground_1864_573: {
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
  View_1864_574: {
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
  Text_1864_574: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_575: {
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
  Text_1864_575: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_576: {
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
  View_1864_577: {
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
  View_1864_578: {
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
  ImageBackground_1864_579: {
    width: wp("1.5836534235212536%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653832607582046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.056287977430557135%")
  },
  View_1864_582: {
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
  View_1864_583: {
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
  View_1864_584: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0.22179442025273488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_585: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_586: {
    width: wp("1.6908260186513264%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_589: {
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
  View_1864_590: {
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
  View_1864_591: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_592: {
    width: wp("1.68648362159729%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_595: {
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
  View_1864_596: {
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
  ImageBackground_1864_597: {
    width: wp("1.6910496022966175%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_598: {
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
  View_1864_599: {
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
  View_1864_600: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.17009797643444813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11271158854165719%")
  },
  ImageBackground_1864_601: {
    width: wp("1.465575959947374%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_608: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("172.95081967213116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.09722222222221%")
  },
  ImageBackground_1864_609: {
    width: wp("3.8194444444444446%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_627: {
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
  View_1864_628: {
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
  Text_1864_628: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_629: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777786%")
  },
  ImageBackground_1864_630: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_634: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_635: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_653: {
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
  View_1864_654: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_655: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_656: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_657: {
    width: wp("0.6639766693115234%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1922200520833428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7991807725694429%")
  },
  ImageBackground_1864_658: {
    width: wp("0.6532165739271376%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7991807725694429%")
  },
  ImageBackground_1864_659: {
    width: wp("0.14038824372821385%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6102430555555571%")
  },
  ImageBackground_1864_660: {
    width: wp("0.14035292797618443%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5118001302083357%")
  },
  ImageBackground_1864_661: {
    width: wp("3.249186409844292%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.282606336805557%")
  },
  View_1864_670: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  ImageBackground_1864_671: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_675: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  View_1864_676: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_677: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_678: {
    width: wp("1.1226296424865723%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5699598524305536%")
  },
  ImageBackground_1864_679: {
    width: wp("3.2491593890719943%"),
    height: hp("1.132476134378402%"),
    top: hp("1.92103985228826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.282606336805557%")
  },
  View_1864_688: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_689: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_707: {
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
  View_1864_708: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_709: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_710: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_711: {
    width: wp("0.6639766693115234%"),
    height: hp("0.6555747464706337%"),
    top: hp("1.1922200520833428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.79918077256945%")
  },
  ImageBackground_1864_712: {
    width: wp("0.6532165739271376%"),
    height: hp("1.6353844293479711%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.79918077256945%")
  },
  ImageBackground_1864_713: {
    width: wp("0.14038824372821385%"),
    height: hp("0.8708589063967512%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6102430555555571%")
  },
  ImageBackground_1864_714: {
    width: wp("0.14035292797618443%"),
    height: hp("0.8707892047902924%"),
    top: hp("1.9539254610655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5118001302083357%")
  },
  ImageBackground_1864_715: {
    width: wp("3.249186409844292%"),
    height: hp("1.1302617078270416%"),
    top: hp("1.8254514600409664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.282606336805557%")
  },
  View_1864_724: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777771%")
  },
  ImageBackground_1864_725: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_729: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777771%")
  },
  View_1864_730: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_731: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_732: {
    width: wp("1.1226296424865723%"),
    height: hp("2.708365226703915%"),
    top: hp("1.0353963883196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5699598524305642%")
  },
  ImageBackground_1864_733: {
    width: wp("3.2491593890719943%"),
    height: hp("1.132476134378402%"),
    top: hp("1.92103985228826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2826063368055642%")
  },
  View_1864_742: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_743: {
    width: wp("8.194444444444445%"),
    height: hp("4.778720772331529%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_761: {
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
  Text_1864_761: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_762: {
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
  Text_1864_762: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_763: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%")
  },
  View_1864_764: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("184.56284153005464%"),
    minHeight: hp("184.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1864_765: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("37.704918032786885%"),
    minHeight: hp("37.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.75%"),
    top: hp("43.0327868852459%")
  },
  View_1864_766: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("37.704918032786885%"),
    minHeight: hp("37.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_767: {
    width: wp("18.680555555555557%"),
    minWidth: wp("18.680555555555557%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("30.054644808743177%")
  },
  View_1864_768: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
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
  View_1864_769: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.861111111111114%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1864_770: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "center"
  },
  Text_1864_770: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_771: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.527777777777771%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "center"
  },
  Text_1864_771: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_772: {
    width: wp("12.152777777777777%"),
    minWidth: wp("12.152777777777777%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.305555555555557%"),
    top: hp("16.12021857923498%"),
    justifyContent: "flex-start"
  },
  Text_1864_772: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_773: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777779%"),
    top: hp("20.901639344262307%"),
    justifyContent: "flex-start"
  },
  Text_1864_773: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_774: {
    width: wp("31.11111111111111%"),
    minWidth: wp("31.11111111111111%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.322404371584696%")
  },
  View_1864_775: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.680555555555557%"),
    top: hp("4.098360655737714%")
  },
  View_1864_776: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_777: {
    width: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_778: {
    width: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
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
