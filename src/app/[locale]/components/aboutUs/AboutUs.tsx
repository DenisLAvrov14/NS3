const AboutUs = () => {
  return (
    <section className="relative w-[1140px] h-[387px] bg-[#E40000] rounded-[40px] flex items-center p-10">
      {/* Левая часть: Лого (SVG) */}
      <div className="w-1/2 flex flex-col justify-center items-center text-black">
        <svg
          width="310"
          height="230"
          viewBox="0 0 1920 1062"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black"
        >
          <path
            d="M420.233 238.801H603.467V648.912C603.467 755.032 517.414 841.041 411.287 841.041C305.138 841.041 219.107 755.01 219.107 648.912V421.72C219.107 411.82 211.073 403.788 201.171 403.788C191.268 403.788 183.234 411.82 183.234 421.72V841.063H0V430.93C0 324.81 86.0539 238.801 192.18 238.801C298.329 238.801 384.361 324.832 384.361 430.93V657.588C384.361 667.488 392.394 675.52 402.297 675.52C412.2 675.52 420.233 667.488 420.233 657.588V238.801ZM659.056 430.396C659.056 536.517 745.11 622.526 851.237 622.526H1077.95C1087.86 622.526 1095.89 630.557 1095.89 640.457C1095.89 650.358 1087.86 658.389 1077.95 658.389H659.034V841.575H1069.25C1175.4 841.575 1261.43 755.544 1261.43 649.446C1261.43 543.325 1175.38 457.316 1069.25 457.316H842.002C832.099 457.316 824.065 449.285 824.065 439.384C824.065 429.484 832.099 421.453 842.002 421.453H1261.46V238.267H851.237C745.088 238.267 659.056 324.298 659.056 430.396ZM1920 430.13C1920 324.009 1833.95 238 1727.82 238H1317.6V421.186H1736.52C1746.42 421.186 1754.46 429.217 1754.46 439.118C1754.46 449.018 1746.42 457.049 1736.52 457.049L1317.6 457.316V622.304L1736.52 622.57C1746.42 622.57 1754.46 630.602 1754.46 640.502C1754.46 650.402 1746.42 658.434 1736.52 658.434H1317.6V841.62H1727.82C1833.97 841.62 1920 755.588 1920 649.49C1920 608.71 1907.27 570.934 1885.6 539.832C1907.25 508.73 1920 470.954 1920 430.174V430.13Z"
            fill="black"
          />
          <path
            d="M1091.12 88.64C1091.12 86.8 1091.28 84.64 1091.6 82.16C1091.92 79.68 1092.52 76.88 1093.4 73.76C1094.28 70.56 1095.6 67 1097.36 63.08L1112.12 68.24C1111.24 70.72 1110.48 73 1109.84 75.08C1109.2 77.08 1108.72 78.96 1108.4 80.72C1108.08 82.4 1107.92 84.08 1107.92 85.76C1107.92 88.4 1108.48 90.76 1109.6 92.84C1110.8 95 1112.52 96.8 1114.76 98.24C1117 99.76 1119.72 100.92 1122.92 101.72C1126.2 102.52 1129.96 102.92 1134.2 102.92C1138.6 102.92 1142.52 102.72 1145.96 102.32C1149.48 101.92 1152.44 101.32 1154.84 100.52C1157.32 99.72 1159.2 98.68 1160.48 97.4C1161.76 96.2 1162.4 94.8 1162.4 93.2C1162.4 92.48 1162.12 91.8 1161.56 91.16C1161.08 90.52 1160.24 89.84 1159.04 89.12C1157.92 88.4 1156.4 87.64 1154.48 86.84C1152.64 86.04 1150.4 85.16 1147.76 84.2L1151.72 67.28C1155.16 68.72 1158.4 70 1161.44 71.12C1164.56 72.16 1167.52 73.04 1170.32 73.76C1173.12 74.4 1175.76 74.92 1178.24 75.32C1180.72 75.64 1183.04 75.8 1185.2 75.8C1188.24 75.8 1190.4 76.6 1191.68 78.2C1192.96 79.72 1193.6 81.64 1193.6 83.96C1193.6 86.44 1192.76 88.52 1191.08 90.2C1189.4 91.8 1187.04 92.6 1184 92.6C1183.36 92.6 1182.72 92.6 1182.08 92.6C1181.52 92.6 1180.92 92.6 1180.28 92.6C1179.72 92.6 1179.12 92.6 1178.48 92.6C1178.64 93.4 1178.72 94.08 1178.72 94.64C1178.72 95.28 1178.72 95.88 1178.72 96.44C1178.72 99.08 1177.8 101.76 1175.96 104.48C1174.2 107.2 1171.44 109.72 1167.68 112.04C1163.92 114.36 1159.12 116.2 1153.28 117.56C1147.52 119 1140.64 119.72 1132.64 119.72C1124 119.72 1116.56 118.6 1110.32 116.36C1104.16 114.2 1099.4 110.8 1096.04 106.16C1092.76 101.6 1091.12 95.76 1091.12 88.64ZM1144.4 147.56C1142.08 147.56 1140.08 146.72 1138.4 145.04C1136.8 143.44 1136 141.52 1136 139.28C1136 136.96 1136.8 134.96 1138.4 133.28C1140.08 131.6 1142.08 130.76 1144.4 130.76C1146.64 130.76 1148.56 131.6 1150.16 133.28C1151.76 134.96 1152.56 136.96 1152.56 139.28C1152.56 141.52 1151.76 143.44 1150.16 145.04C1148.56 146.72 1146.64 147.56 1144.4 147.56ZM1123.64 147.56C1121.32 147.56 1119.32 146.72 1117.64 145.04C1116.04 143.44 1115.24 141.52 1115.24 139.28C1115.24 136.96 1116.04 134.96 1117.64 133.28C1119.32 131.6 1121.32 130.76 1123.64 130.76C1125.88 130.76 1127.8 131.6 1129.4 133.28C1131 134.96 1131.8 136.96 1131.8 139.28C1131.8 141.52 1131 143.44 1129.4 145.04C1127.8 146.72 1125.88 147.56 1123.64 147.56ZM1183.98 92.6L1185.18 75.8C1188.7 75.8 1191.46 75.56 1193.46 75.08C1195.54 74.6 1197.02 73.72 1197.9 72.44C1198.78 71.08 1199.22 69.16 1199.22 66.68C1199.22 64.44 1198.9 61.76 1198.26 58.64C1197.7 55.52 1196.94 52.28 1195.98 48.92C1195.02 45.56 1194.06 42.48 1193.1 39.68L1209.66 35.12C1210.62 37.84 1211.58 41 1212.54 44.6C1213.5 48.2 1214.3 51.92 1214.94 55.76C1215.66 59.52 1216.02 63.16 1216.02 66.68C1216.02 71.08 1215.46 74.8 1214.34 77.84C1213.22 80.8 1211.66 83.28 1209.66 85.28C1207.74 87.2 1205.42 88.72 1202.7 89.84C1200.06 90.88 1197.14 91.6 1193.94 92C1190.74 92.4 1187.42 92.6 1183.98 92.6ZM1198.74 120.2C1196.42 120.2 1194.42 119.4 1192.74 117.8C1191.14 116.2 1190.34 114.24 1190.34 111.92C1190.34 109.6 1191.14 107.56 1192.74 105.8C1194.42 104.12 1196.42 103.28 1198.74 103.28C1201.06 103.28 1203.02 104.12 1204.62 105.8C1206.3 107.56 1207.14 109.6 1207.14 111.92C1207.14 114.24 1206.3 116.2 1204.62 117.8C1203.02 119.4 1201.06 120.2 1198.74 120.2ZM1226.26 87.2L1232.14 71.96C1235.1 73.24 1237.94 74.2 1240.66 74.84C1243.38 75.48 1246.1 75.8 1248.82 75.8C1251.62 75.8 1253.94 75.56 1255.78 75.08C1257.7 74.52 1259.14 73.72 1260.1 72.68C1261.06 71.64 1261.54 70.4 1261.54 68.96C1261.54 67.6 1261.1 65.72 1260.22 63.32C1259.42 60.92 1257.94 57.8 1255.78 53.96C1253.62 50.04 1250.46 45.2 1246.3 39.44L1260.58 29.96C1264.42 35.4 1267.74 40.72 1270.54 45.92C1273.34 51.04 1275.5 55.84 1277.02 60.32C1278.62 64.72 1279.42 68.6 1279.42 71.96C1279.42 76.12 1278.3 79.76 1276.06 82.88C1273.9 85.92 1270.66 88.32 1266.34 90.08C1262.1 91.84 1256.86 92.72 1250.62 92.72C1248.3 92.72 1245.7 92.52 1242.82 92.12C1239.94 91.72 1237.02 91.12 1234.06 90.32C1231.18 89.52 1228.58 88.48 1226.26 87.2Z"
            fill="black"
          />
          <path
            d="M679.08 120H632.28V36.36H676.8C695.6 36.36 709.44 39.68 718.32 46.32C727.2 52.96 731.64 63.32 731.64 77.4C731.64 91.96 727.36 102.72 718.8 109.68C710.24 116.56 697 120 679.08 120ZM652.92 53.4V102.96H678.6C690.04 102.96 698.28 100.96 703.32 96.96C708.44 92.96 711 86.44 711 77.4C711 68.92 708.32 62.8 702.96 59.04C697.68 55.28 689.08 53.4 677.16 53.4H652.92ZM792.063 91.08V56.76H812.223V120H792.063V109.08C789.743 113.64 786.623 116.96 782.703 119.04C778.783 121.04 773.783 122.04 767.703 122.04C758.823 122.04 752.543 120.08 748.863 116.16C745.103 112.16 743.223 105.44 743.223 96V56.76H763.383V95.4C763.383 102.76 767.983 106.44 777.183 106.44C786.943 106.44 791.903 101.32 792.063 91.08ZM874.303 54.72C885.743 54.72 894.183 57.44 899.623 62.88C905.143 68.32 907.903 76.76 907.903 88.2C907.903 99.8 905.143 108.36 899.623 113.88C894.183 119.32 885.743 122.04 874.303 122.04C861.263 122.04 852.223 117.72 847.183 109.08V120H827.023V28.8H847.183V67.2C852.143 58.88 861.183 54.72 874.303 54.72ZM867.703 106.32C874.823 106.32 879.903 104.92 882.943 102.12C886.063 99.32 887.623 94.68 887.623 88.2C887.623 81.88 886.063 77.32 882.943 74.52C879.903 71.72 874.903 70.32 867.943 70.32C861.223 70.32 856.023 71.72 852.343 74.52C848.663 77.32 846.743 81.24 846.583 86.28V89.28C846.583 94.56 848.423 98.72 852.103 101.76C855.783 104.8 860.983 106.32 867.703 106.32ZM951.993 54.72C963.673 54.72 972.273 56.84 977.793 61.08C983.393 65.24 986.193 71.76 986.193 80.64V120H965.913V109.92C960.953 118 953.073 122.04 942.273 122.04C933.713 122.04 927.233 120.4 922.833 117.12C918.513 113.76 916.353 108.92 916.353 102.6C916.353 88.92 927.033 82.08 948.393 82.08C955.113 82.08 960.953 82.68 965.913 83.88V80.64C965.913 76.88 964.793 74.16 962.553 72.48C960.313 70.72 956.793 69.84 951.993 69.84C943.513 69.84 938.953 72 938.313 76.32H919.833C920.553 61.92 931.273 54.72 951.993 54.72ZM948.873 107.88C954.073 107.88 958.193 106.8 961.233 104.64C964.273 102.4 965.833 99.24 965.913 95.16V94.92C961.673 93.88 956.353 93.36 949.953 93.36C940.193 93.36 935.313 95.72 935.313 100.44C935.313 105.4 939.833 107.88 948.873 107.88ZM1010.3 46.8C1005.82 46.8 1002.78 46.16 1001.18 44.88C999.583 43.52 998.783 40.96 998.783 37.2C998.783 33.36 999.583 30.8 1001.18 29.52C1002.78 28.16 1005.82 27.48 1010.3 27.48C1015.02 27.48 1018.18 28.16 1019.78 29.52C1021.38 30.8 1022.18 33.36 1022.18 37.2C1022.18 40.96 1021.34 43.52 1019.66 44.88C1018.06 46.16 1014.94 46.8 1010.3 46.8ZM1020.5 120H1000.34V56.76H1020.5V120Z"
            fill="black"
          />
          <path
            d="M807.52 1002.08V1007H748.84C749.48 1012.28 751.32 1016 754.36 1018.16C757.4 1020.32 762.2 1021.4 768.76 1021.4C780.04 1021.4 786.2 1018.96 787.24 1014.08H806.32C804.96 1028.72 792.32 1036.04 768.4 1036.04C754.72 1036.04 744.68 1033.28 738.28 1027.76C731.88 1022.24 728.68 1013.6 728.68 1001.84C728.68 990.48 731.84 982.12 738.16 976.76C744.56 971.4 754.56 968.72 768.16 968.72C781.76 968.72 791.72 971.36 798.04 976.64C804.36 981.84 807.52 990.32 807.52 1002.08ZM768.28 983.36C762.04 983.36 757.44 984.28 754.48 986.12C751.6 987.96 749.8 991.12 749.08 995.6H787.24C787.08 991.28 785.48 988.16 782.44 986.24C779.48 984.32 774.76 983.36 768.28 983.36ZM850.807 1018.04L865.087 970.76H885.607L866.287 1034H831.847L812.527 970.76H832.927L847.327 1018.04H850.807ZM969.356 1002.08V1007H910.676C911.316 1012.28 913.156 1016 916.196 1018.16C919.236 1020.32 924.036 1021.4 930.596 1021.4C941.876 1021.4 948.036 1018.96 949.076 1014.08H968.156C966.796 1028.72 954.156 1036.04 930.236 1036.04C916.556 1036.04 906.516 1033.28 900.116 1027.76C893.716 1022.24 890.516 1013.6 890.516 1001.84C890.516 990.48 893.676 982.12 899.996 976.76C906.396 971.4 916.396 968.72 929.996 968.72C943.596 968.72 953.556 971.36 959.876 976.64C966.196 981.84 969.356 990.32 969.356 1002.08ZM930.116 983.36C923.876 983.36 919.276 984.28 916.316 986.12C913.436 987.96 911.636 991.12 910.916 995.6H949.076C948.916 991.28 947.316 988.16 944.276 986.24C941.316 984.32 936.596 983.36 930.116 983.36ZM1025.92 968.72C1034.72 968.72 1041 970.72 1044.76 974.72C1048.52 978.72 1050.4 985.4 1050.4 994.76V1034H1030.24V995.36C1030.24 988 1025.64 984.32 1016.44 984.32C1006.68 984.32 1001.72 989.44 1001.56 999.68V1034H981.398V970.76H1001.56V981.68C1003.88 977.12 1007 973.84 1010.92 971.84C1014.84 969.76 1019.84 968.72 1025.92 968.72ZM1113.8 970.76V986.6H1091.48V1008.68C1091.48 1012.6 1092.32 1015.48 1094 1017.32C1095.76 1019.08 1098.56 1019.96 1102.4 1019.96C1105.84 1019.96 1109.64 1019.04 1113.8 1017.2V1032.8C1110.04 1034.96 1105.12 1036.04 1099.04 1036.04C1089.36 1036.04 1082.32 1033.88 1077.92 1029.56C1073.52 1025.16 1071.32 1018.2 1071.32 1008.68V986.6H1059.92V970.76H1071.32V954.92H1091.48V970.76H1113.8ZM1155.88 1036.04C1135.08 1036.04 1124.32 1028.8 1123.6 1014.32H1141.96C1142.44 1019.36 1147.48 1021.88 1157.08 1021.88C1165.4 1021.88 1169.56 1019.76 1169.56 1015.52C1169.56 1014.08 1169.12 1013 1168.24 1012.28C1167.44 1011.48 1166 1010.92 1163.92 1010.6L1144.72 1007C1138.24 1005.8 1133.48 1003.8 1130.44 1001C1127.4 998.2 1125.88 994.4 1125.88 989.6C1125.88 982.48 1128.44 977.24 1133.56 973.88C1138.68 970.44 1146.72 968.72 1157.68 968.72C1176.88 968.72 1186.96 975.64 1187.92 989.48H1169.68C1169.2 987.08 1168 985.36 1166.08 984.32C1164.16 983.28 1161.24 982.76 1157.32 982.76C1149.56 982.76 1145.68 984.72 1145.68 988.64C1145.68 990.8 1147.64 992.24 1151.56 992.96L1170.16 996.44C1176.8 997.64 1181.68 999.72 1184.8 1002.68C1188 1005.56 1189.6 1009.48 1189.6 1014.44C1189.6 1021.8 1186.88 1027.24 1181.44 1030.76C1176 1034.28 1167.48 1036.04 1155.88 1036.04Z"
            fill="black"
          />{" "}
        </svg>
      </div>

      {/* Правая часть: Текст */}
      <div className="w-1/2 text-white text-left">
        <h2 className="text-3xl font-bold">
          Мы — молодая компания
          <br />
          по организации концертов в Дубае
        </h2>
        <p className="mt-4 text-lg">
          За нашими плечами большой опыт мероприятий
          <br />
          разных форматов и масштабов в России и Казахстане.
        </p>
        <p className="mt-4 text-lg">
          С 2024 мы в ОАЭ и хотим радовать русскоязычных
          <br />
          жителей и гостей интересными и эмоциональными событиями!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
