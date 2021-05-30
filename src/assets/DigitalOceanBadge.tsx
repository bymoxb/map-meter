import * as React from "react";
import { Linking } from "react-native";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

interface DigitalOceanBadgeProps {
  width?: number;
  height?: number;
}

const DigitalOceanBadge: React.FC<DigitalOceanBadgeProps> = ({
  width = 350,
  height = 200,
}: DigitalOceanBadgeProps) => {
  return (
    <Svg
      onPress={() => Linking.openURL("https://m.do.co/c/c088a55413a2")}
      width={width}
      height={height}
      viewBox="0 0 200 65"
      fill="none"
      //style={{ borderWidth: 1 }}
      //xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={200} height={65} rx={5} fill="#0069FF" />
      <Path
        d="M73.813 33.544c-1.433-.957-3.213-1.459-5.29-1.459H64v13.897h4.524c2.076 0 3.856-.503 5.29-1.531.79-.526 1.408-1.292 1.829-2.224.42-.933.642-2.034.642-3.277 0-1.22-.222-2.32-.642-3.253a5.115 5.115 0 00-1.83-2.153zm-7.168.909h1.434c1.582 0 2.892.31 3.88.885 1.088.646 1.657 1.866 1.657 3.612 0 1.817-.569 3.085-1.656 3.779-.94.598-2.25.909-3.857.909h-1.458v-9.185zM79.45 31.942c-.446 0-.816.143-1.113.43-.297.287-.47.646-.47 1.053 0 .43.149.789.47 1.076.297.287.667.454 1.112.454.445 0 .816-.143 1.113-.454.296-.287.47-.67.47-1.076 0-.431-.149-.79-.47-1.053a1.577 1.577 0 00-1.113-.43zM80.685 36.223H78.14v9.806h2.546v-9.806zM89.955 37.036c-.766-.67-1.632-1.052-2.546-1.052-1.41 0-2.571.478-3.486 1.387-.914.909-1.36 2.105-1.36 3.516 0 1.387.446 2.56 1.36 3.516.915.909 2.077 1.387 3.486 1.387.988 0 1.829-.263 2.521-.789v.215c0 .813-.222 1.435-.667 1.89-.445.43-1.063.646-1.83.646-1.186 0-1.903-.455-2.818-1.627l-1.73 1.603.05.071c.37.503.939 1.005 1.705 1.483.767.479 1.706.718 2.843.718 1.508 0 2.744-.455 3.634-1.34.914-.884 1.36-2.08 1.36-3.563v-8.874H89.98v.813h-.025zm-.668 5.788c-.445.479-1.013.718-1.755.718-.741 0-1.31-.24-1.73-.718-.445-.478-.667-1.124-.667-1.913 0-.79.222-1.46.667-1.938.445-.478 1.013-.74 1.73-.74.742 0 1.31.238 1.755.74.445.479.668 1.149.668 1.938 0 .79-.247 1.435-.668 1.913zM97.173 36.223h-2.546v9.806h2.546v-9.806zM95.937 31.942c-.445 0-.816.143-1.112.43-.297.287-.47.646-.47 1.053 0 .43.148.789.47 1.076.296.287.667.454 1.112.454.445 0 .816-.143 1.112-.454.297-.287.47-.67.47-1.076 0-.431-.148-.79-.47-1.053a1.577 1.577 0 00-1.112-.43zM102.759 33.568h-2.496v2.655h-1.459v2.248h1.459v4.066c0 1.268.272 2.177.791 2.703.519.526 1.433.79 2.743.79.421 0 .841-.024 1.236-.048h.124v-2.249l-.865.048c-.618 0-1.014-.096-1.211-.31-.198-.216-.297-.646-.297-1.292V38.47h2.373v-2.248h-2.373v-2.655h-.025zM119.618 32.109h-2.546v13.897h2.546V32.109zM145.35 42.514c-.445.502-.915.932-1.285 1.147-.346.216-.791.335-1.31.335-.742 0-1.36-.263-1.854-.813-.495-.55-.742-1.244-.742-2.08 0-.838.247-1.532.717-2.058.494-.55 1.088-.813 1.829-.813.816 0 1.681.502 2.423 1.34l1.68-1.555c-1.087-1.388-2.496-2.033-4.177-2.033-1.409 0-2.62.502-3.609 1.459-.989.957-1.483 2.2-1.483 3.66 0 1.458.494 2.678 1.483 3.659.989.98 2.2 1.459 3.609 1.459 1.854 0 3.337-.766 4.326-2.177l-1.607-1.53zM155.806 37.586a4.099 4.099 0 00-1.458-1.172c-.618-.287-1.31-.43-2.101-.43-1.434 0-2.596.502-3.461 1.507-.841 1.004-1.285 2.224-1.285 3.683 0 1.483.469 2.703 1.409 3.66.914.932 2.175 1.41 3.683 1.41 1.705 0 3.139-.669 4.177-2.008l.05-.072-1.657-1.555c-.148.191-.37.383-.568.574a2.82 2.82 0 01-.742.526c-.37.192-.815.263-1.285.263-.717 0-1.285-.19-1.73-.598-.421-.358-.668-.86-.717-1.482h6.748l.025-.91c0-.645-.099-1.243-.272-1.817a5.077 5.077 0 00-.816-1.579zm-5.562 2.296c.124-.478.346-.86.668-1.172.346-.334.791-.502 1.335-.502.618 0 1.087.168 1.409.502.296.311.469.694.519 1.148h-3.931v.024zM165.595 36.94c-.767-.645-1.829-.956-3.164-.956-.841 0-1.632.191-2.349.526-.667.335-1.31.861-1.73 1.579l.025.023 1.631 1.507c.668-1.028 1.409-1.387 2.398-1.387.544 0 .964.144 1.31.407.346.263.494.621.494 1.052v.478a6.515 6.515 0 00-1.878-.287c-1.261 0-2.299.287-3.065.861-.767.575-1.162 1.412-1.162 2.44 0 .91.321 1.675.989 2.225.667.526 1.483.813 2.447.813s1.878-.383 2.694-1.029v.814h2.497v-6.291c.049-1.196-.346-2.129-1.137-2.775zm-4.524 5.334c.297-.191.692-.287 1.211-.287.618 0 1.261.12 1.928.359v.957c-.543.502-1.285.741-2.199.741-.445 0-.791-.095-1.014-.287-.222-.191-.346-.406-.346-.717 0-.335.148-.574.42-.766zM176.57 37.132c-.717-.766-1.706-1.148-2.966-1.148-1.014 0-1.829.287-2.447.837v-.598h-2.497v9.806h2.546V40.6c0-.742.173-1.34.544-1.746.371-.43.84-.622 1.508-.622.568 0 1.013.191 1.335.55.321.383.494.885.494 1.531v5.669h2.546v-5.645c0-1.364-.346-2.44-1.063-3.205zM113.883 36.94c-.766-.645-1.829-.956-3.164-.956-.841 0-1.632.191-2.348.526-.668.335-1.311.861-1.731 1.579l.025.023 1.631 1.507c.668-1.028 1.409-1.387 2.398-1.387.544 0 .964.144 1.31.407.346.263.495.621.495 1.052v.478a6.527 6.527 0 00-1.879-.287c-1.261 0-2.299.287-3.065.861-.766.575-1.162 1.412-1.162 2.44 0 .91.321 1.675.989 2.225.667.526 1.483.813 2.447.813s1.879-.383 2.694-1.029v.814h2.497v-6.291c.025-1.196-.371-2.129-1.137-2.775zm-4.524 5.334c.297-.191.692-.287 1.212-.287.617 0 1.26.12 1.928.359v.957c-.544.502-1.286.741-2.2.741-.445 0-.791-.095-1.014-.287-.222-.191-.346-.406-.346-.717 0-.335.124-.574.42-.766zM128.863 46.22c-4.079 0-7.416-3.204-7.416-7.175 0-3.97 3.312-7.175 7.416-7.175 4.103 0 7.415 3.205 7.415 7.175 0 3.97-3.337 7.176-7.415 7.176zm0-11.815c-2.645 0-4.796 2.081-4.796 4.64 0 2.56 2.151 4.64 4.796 4.64 2.644 0 4.795-2.08 4.795-4.64 0-2.559-2.151-4.64-4.795-4.64zM63.998 26v-8.242h2.785c.646 0 1.175.117 1.585.35.414.231.72.544.918.938.198.394.298.834.298 1.32 0 .486-.1.927-.298 1.324a2.213 2.213 0 01-.91.95c-.41.233-.936.35-1.577.35h-1.996v-.886h1.964c.443 0 .798-.076 1.066-.229.269-.153.463-.36.584-.62.123-.263.185-.56.185-.89 0-.33-.062-.624-.185-.884a1.32 1.32 0 00-.588-.612c-.27-.15-.63-.226-1.078-.226h-1.755V26h-.998zm9.51.129c-.558 0-1.048-.133-1.47-.399a2.707 2.707 0 01-.981-1.114c-.234-.478-.35-1.036-.35-1.674 0-.644.116-1.207.35-1.687.236-.48.563-.853.982-1.118.42-.266.91-.399 1.468-.399.559 0 1.047.133 1.465.399.422.265.749.638.982 1.118.236.48.355 1.043.355 1.687 0 .638-.119 1.196-.355 1.674a2.67 2.67 0 01-.982 1.114c-.418.266-.906.399-1.465.399zm0-.853c.423 0 .772-.109 1.046-.326.273-.218.476-.503.608-.857.131-.355.197-.738.197-1.151 0-.414-.066-.799-.197-1.155a1.946 1.946 0 00-.608-.866c-.274-.22-.623-.33-1.047-.33-.423 0-.772.11-1.046.33-.273.22-.476.509-.608.866a3.317 3.317 0 00-.197 1.155c0 .413.066.796.197 1.15.132.355.335.64.608.858.274.217.623.326 1.046.326zm5.44.724l-1.883-6.181h.998L79.4 24.55h.064l1.32-4.732h1.015l1.303 4.716h.065l1.336-4.716h.998L83.617 26h-.934l-1.352-4.749h-.097L79.882 26h-.934zm10.189.129c-.596 0-1.11-.132-1.541-.395a2.647 2.647 0 01-.994-1.11c-.231-.478-.346-1.033-.346-1.666 0-.634.115-1.192.346-1.674a2.73 2.73 0 01.974-1.135c.418-.274.906-.41 1.464-.41.322 0 .64.053.954.16.314.107.6.282.857.523.258.24.463.556.616.95.153.394.23.88.23 1.457v.402h-4.765v-.82h3.799c0-.35-.07-.66-.21-.934a1.577 1.577 0 00-.587-.648 1.645 1.645 0 00-.894-.238c-.378 0-.705.094-.982.282a1.853 1.853 0 00-.631.724 2.127 2.127 0 00-.222.958v.547c0 .467.08.863.242 1.188.163.322.39.567.68.736.29.166.626.25 1.01.25.25 0 .475-.035.676-.105.204-.072.38-.18.527-.322.148-.145.262-.325.342-.54l.918.258a2.035 2.035 0 01-.487.821c-.228.234-.51.416-.845.548a3.134 3.134 0 01-1.131.193zM93.141 26v-6.181h.918v.933h.064c.113-.306.317-.554.612-.744a1.8 1.8 0 01.998-.286c.07 0 .157.001.261.004.105.003.184.007.238.012v.966a2.793 2.793 0 00-.221-.036 2.177 2.177 0 00-.359-.028c-.3 0-.568.063-.804.189a1.389 1.389 0 00-.757 1.26V26h-.95zm6.62.129c-.595 0-1.11-.132-1.541-.395a2.648 2.648 0 01-.994-1.11c-.23-.478-.346-1.033-.346-1.666 0-.634.115-1.192.346-1.674a2.73 2.73 0 01.974-1.135c.418-.274.907-.41 1.465-.41.322 0 .64.053.953.16.314.107.6.282.858.523.257.24.462.556.615.95.153.394.23.88.23 1.457v.402h-4.765v-.82h3.799c0-.35-.07-.66-.209-.934a1.578 1.578 0 00-.588-.648 1.645 1.645 0 00-.893-.238c-.379 0-.706.094-.982.282a1.854 1.854 0 00-.632.724 2.129 2.129 0 00-.221.958v.547c0 .467.08.863.241 1.188.164.322.39.567.68.736.29.166.627.25 1.01.25.25 0 .475-.035.676-.105.204-.072.38-.18.528-.322.147-.145.261-.325.342-.54l.917.258a2.028 2.028 0 01-.487.821c-.228.234-.51.416-.845.548a3.131 3.131 0 01-1.13.193zm6.339 0c-.516 0-.97-.13-1.365-.39a2.632 2.632 0 01-.925-1.111c-.223-.48-.334-1.048-.334-1.703 0-.649.111-1.212.334-1.69.222-.477.532-.846.929-1.107.397-.26.856-.39 1.377-.39.402 0 .72.067.953.201.237.132.416.282.54.451.126.166.224.303.293.41h.081v-3.042h.95V26h-.918v-.95h-.113a6.065 6.065 0 01-.297.427 1.77 1.77 0 01-.552.455c-.238.131-.556.197-.953.197zm.128-.853c.381 0 .703-.1.966-.298.263-.201.463-.48.6-.833.137-.357.205-.769.205-1.236 0-.461-.067-.865-.201-1.211a1.762 1.762 0 00-.596-.813c-.263-.196-.587-.294-.974-.294-.402 0-.737.104-1.006.31a1.857 1.857 0 00-.599.833 3.3 3.3 0 00-.198 1.175c0 .44.068.84.202 1.2.137.356.338.64.603.853.269.209.601.314.998.314zm7.892.724v-8.242h.95v3.043h.08c.07-.108.167-.245.29-.41a1.7 1.7 0 01.539-.452c.236-.134.556-.2.958-.2.521 0 .979.13 1.376.39.397.26.707.629.93 1.106.223.478.334 1.041.334 1.69 0 .655-.111 1.223-.334 1.703-.223.477-.531.848-.926 1.11-.394.26-.849.39-1.364.39-.397 0-.715-.065-.954-.196a1.778 1.778 0 01-.551-.455 6.132 6.132 0 01-.298-.427h-.112V26h-.918zm.934-3.09c0 .466.068.878.205 1.235.137.354.337.632.6.833.263.198.584.298.965.298.397 0 .729-.105.994-.314.269-.212.47-.497.604-.853.137-.36.205-.76.205-1.2 0-.434-.067-.826-.201-1.175a1.808 1.808 0 00-.6-.833c-.265-.206-.599-.31-1.002-.31-.386 0-.711.098-.973.294a1.762 1.762 0 00-.596.813c-.134.346-.201.75-.201 1.211zm6.366 5.408a2.076 2.076 0 01-.692-.113l.241-.837c.231.06.435.08.612.065a.734.734 0 00.471-.238c.14-.14.267-.366.382-.68l.177-.483-2.285-6.213h1.03l1.706 4.925h.065l1.706-4.925h1.03l-2.624 7.082c-.118.32-.264.584-.438.793a1.648 1.648 0 01-.608.471 1.876 1.876 0 01-.773.153z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.098 48v-6.196c6.615 0 11.7-6.5 9.177-13.42a9.223 9.223 0 00-5.545-5.512c-6.959-2.509-13.497 2.585-13.497 9.124H23c0-10.454 10.171-18.627 21.184-15.206 4.817 1.483 8.641 5.322 10.17 10.112C57.797 37.888 49.615 48 39.099 48z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.098 41.842h-6.195v-6.159h6.195v6.159zM32.902 46.593h-4.78v-4.751h4.78v4.752zM28.125 41.842H24.11v-3.954h3.977v3.954h.038z"
        fill="#fff"
      />
    </Svg>
  );
};

export default DigitalOceanBadge;
