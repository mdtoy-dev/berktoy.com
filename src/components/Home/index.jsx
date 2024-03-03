import styles from "./styles.module.css"
import profilePic from "../../assets/profile.jpeg"
import textPic from "../../assets/textPic.png"

const Home = () => {
  return (
    <div className={styles.home}>
      <p>27, Male, UK</p>
      <p>Medical Doctor, Clinical Engineer, Software Developer</p>
      <p>Existentialist, Individualist, Neurodiverse</p>
      <p className="special">
        They told me AI is going to take over doctors’ jobs. Guess what, hunted
        becomes the hunter. I’m coming for you AI.
      </p>
      <div className="profile-container">
        {/* <p className="picture">
          ~7^^~7~~~~!:^?!?YY?JP5JJ!JYYY7^?J7?5Y^Y?^7^:^~7!::: ..:. . ...^.^~~
          <br></br>
          7!7!~7?~~?JJYYJ??YJ?J5555JJJ7?7J!???J7?J!7Y?!!~!?!^:^^.... .^.
          ..:^^^!??7J?77!7!!?777J7?YJJ~!~?Y<br></br>
          ^!?7^J?!^7?JY777?JYYJPPJJ?~!7?Y5?7!
          ~Y5P5J?^...:7~^^!^^~!^.:..:.::.:...:~!7?7!~?77J7?JJJJJ7?7??~:^JY
          <br></br>
          ::!??J?7!!7!^~7^^JY5Y??7??7~75YPY7!~?5PPPJ^...7Y^.:7^.:!?7^~^.::!!^?~!~?YJ?77?7!7YY7?JJ77~~7~!J77???
          <br></br>
          !~!~7!!??!77~!?!?7^JYYYJ??7~???55JY5?J?555!^7~:~~~!~^:~^^!!~:.!?!!!^^~!7777~!!JJ7??~!??7~!?!7!^7J??!
          <br></br>
          !777~~7YYJ7J7?YJY?!!J5J?557J?!Y5Y??JJY?Y555Y!..^!?J77????JJ?????7?!~^!!7~::!~7??7~?777?!!?7!??7J7:!Y
          <br></br>
          ?7YY7~???^~J7!JYJYJJJYJ?YYJJ?JYYJJ!7!!?5PG5Y~^!7J7~^::....:^~~7?JJJ?!!^!^:~?!!??7!!^?77!JYYJJ5J7775P
          <br></br>
          ?YJ?!~JY?7J?!~?YJ5JJY555Y55YYJJYJJ?JJY5YJ!!!77?JJ: .:^^^^^^^:..
          :~7JYJ!~!!!7??77!!~JY77JJY5Y???JYJJ<br></br>
          JYJJYY5?7J7??77J!7YYYJ5J755PPJJP5J??Y57~!!?7??Y????JJYYJYYYYYYJ?7~:.
          :?Y?!7?!??7777YJJYJ77??!77?57!Y<br></br>
          7?JJ55YJYYYJ?JJJ??JJYY5YJYY5Y!~JPPJ!77!!?7?7?YY?YY55PGPPGGGGGGPPPP5J7^
          ^PY?77???JYY5JY5JJJJ7?J7PY!77<br></br>
          !!!??55YP55JJ5P55YY55YJYYYJ?7?!7PJ^~~!7!7?JY5PGGGB############BBBBGGG5J7PPPY???JY7JYYJ?Y?7?5YYYY!7J?
          <br></br>
          ???775PJYGP55PPPPJJJJ?JYY55J77::7!^!!!77J5GBB###############&&&&#####BGGPPPP5JJ??!Y5YYJJ??7!?Y?J7YY5
          <br></br>
          ^~~~?7??YB5Y5Y?55JYYJJJJYJ5?7~
          ^!~!!!?5GB####BGP5YYJJJYY555PPGB##&&&&&###GGPP5??!7JJ?JJJJJ??Y555PBPP
          <br></br>
          ^:..^!J?7YG?~~JJ555YYPYY5PP55?~^!!!7JPB###BG5J7!!!~~~~~!!!!777?JY5GB#&&&###GPG5?7?Y?~?7~7??75BGP55YP
          <br></br>
          5J??7!77~!?YYJ5YJPGYYJJ?555PGJ7!!!?PB###BGPP55PPPPPYJJ7!!!!7JYJY5555GB#&&&&#BPGY7!?!7JYJYJY?7YJ5PPPG
          <br></br>
          GGP5YYY7?JYJ?JPB55P?7YY?YY?55?~!7JPB##G5YJY5PGBB##BBGG5JJJJYBBB#########&&&&#BGP?!?!JYYJJY5JJJP5PGYY
          <br></br>
          Y5PGPPYJ5YPPGY5PBBG5!!????^!J!~7YG###P7^:^!7?JY5PPPP5YJ??JY5GGGBBBGGGGBB#&&&&#BGYJJYY5JJYPP75YY5J?J5
          <br></br>
          ?7?5GBY?~!7?YJ?755PGY~~J?JY7~~!JG###P7^^^~!7?JY5PPGPPJ~~~?YGGGGPP5YJJJJYPB&&&&#GPJYYPYYYJPPJJJ5G5?YP
          <br></br>
          7!7775GG?:
          ^7JY?7?PP7Y5PGPY~!?GB##G7!77?Y5GGBBGGGBG5!:^~!YGBBBBGP5YYYY5Y5B&&&&#G5J?JJJ5Y5555JY5G5Y5
          <br></br>
          ?7??~!!5BP??JP5P5PGPGGYYYP57!?PB##B7^~^~!?JY5555P55J~..:^~?YPGGGBBBBBGGGG5P#&&&#BJYPPYJ?55?J5P5~7YJP
          <br></br>
          555PPG5PGGBBBGGGGGBBGG!.777~?5B##B?:.:::^~7?JJYJJ?!^.
          :^!??JY5PPPPPPP555YYB&&&&#5PYJ?7~JP5PPY5YYPGB<br></br>
          JYJJJYP5JYYBBGPJ7!JGPGJ!^:^~JG###?. .. .:^^~~^^^:.
          :^~77??77??JJ??77?JYG&&&&#55YJ55JJ5YGGBBYP55G<br></br>
          !?YJ7?J5PP?YG#BY^!YPPGJ..:~7PB#&5. .^~~~~~!7~.
          ..:^^~!777!!~~^^^^^~!?J5#&&&#5YYPG55P5Y5PGGGPPY5<br></br>
          :~?5JJJ5Y5YYY5G5JJ?YJJ^...^JG##G: .^~777?JY55:
          :~!77!!77!!JJ7!~~~~~~~!?YB&&&&P5P5Y!JPYGGBGPPPPPP<br></br>
          :^~~J5Y?J!^?5JJJP57?Y5^.::.JB#G!
          :~7?JYY55YJ?!77~7JJJJJY5YJY55Y?77!!!!77?G&&&&GP5Y5Y555BBBGGPP5PP
          <br></br>: .^!Y5J!~:~JYY?7!!Y55J^~!:?BP7:
          ..:!?JY5PP5YJJJY5PPYJ55PGGBBPYJY5P5YJJJ????P&&&#5PPYY?PYPJPBYGGBGGG
          <br></br>
          ?~J5?7?^77~^^?J^^^?PYYY!JY7?BY~::^:~7J5GBBP5Y55PPGB##BBB#####BGP5PGBGP5YYYJJP&&&BY55YYPGPPJ5PGBBBPPP
          <br></br>
          5PPGP5Y7~:!7?J~?~7YJ?PJ!JP5?5?!~^!~!7YPGGPYY5G5PBB####&&########BBBB##G55YYJP#&&BPYYJJPGP5PPYPPB#G5!
          <br></br>
          BGYPGGYYP57?7Y7!JYJJJ?!YY55?!7!!~!??JYPBBGGBBB##BB#########&&##&######B555YJG&&GPPP55PGPBPYG5P555JJ7
          <br></br>
          5P5BBPPP5!?J!?J?P5JP5!!P?J5?77?777?JJ5G####BBGGBBBBGPPGPGBB##&&&#&####BP5P55BBP55P5YP5PPPGPPGBGBYY55
          <br></br>
          Y5PYPP5P5Y?Y~
          ^YP5YGP?~?77JJJ?JJJJ?JYPGB#BGGGPJ??JY555PPPPGGGGBBB####BGGGGGBBPP?55PBGGBP5PBGPGGBGGPP
          <br></br>
          GYY55PY7JJ!Y!!7PGYJYJ!7?5YJJ???JJYYYPGGBBPY5P5YYYY555555555PPPGGGB#####B#BB#BGPGPPBBBGGBBBBGGY5GGGGG
          <br></br>
          BBP5JP?^!!~7PGGB5!?J7~?JJYJJ7?JY555PGPGGGY??Y5Y5GGBB#B##BBBBBBGPYPGB########GGGBPPBBBBBBBBGP5PG5GBBB
          <br></br>
          JGBBBBBG5BGPBGGG5?7J777?7?J?JY5Y5PGGPGBBG5?7?Y5PGBBB#BB###BBBGPYJ5G##&&&&&#BBGPGGGB#BBB###BGGGBBBGB#
          <br></br>
          GBB#BGGBGGGBBGGGGJY5YJ????JYYY55Y5GPYGBBBPY?7Y5PPGBBB#####BBGGPY5B#&&&&&&&#BBBBBGGG#B5PBBBBGBBBGPB#B
          <br></br>
          BGBBBBBGPBBBBGGG5YYY77JJ?75YJJ!JYPGPPGGGGPPJYY5PPGGGB##BB#BBBBBB##&&&&&&&&#BGB55BBBBB#PGBBBB#B#5PB##
          <br></br>
          BBBBBBBBBBGBBGBG5YYJ777??7J??JJ5PY5PPPBGPG5555P5PBB##############&&&&&&&##YYGPPGBPBBB###B#BGPPGYGBPP
          <br></br>
          BBBBBBYBBB#BBP5JJ?YJJ7~77?J5PGBBB~^5GGBPPPPGPGGGBB###############&&&&&&#BBG5GBG5Y5PGGGGBBGPJYJPBGPPG
          <br></br>
          BGBGGGGB#BBBG5J?YJ?!~!7?YPGBB##&Y
          :?GBPPGGGGGGB#B##&##&&&&&&&&&&&&&&&#BGGB#GGGGGBBGPGGB#BBBBBGGGPJY
          <br></br>
          GBP5#GP5PP5J7J??7~!7?JYPGBB###B5~~~~7JPGPBBBBBB#B#&&&&&&&&&&&&&&&&####B##BBBGBBBBPBBBB#BGGGBBGGBGBG?
          <br></br>
          55?J?7777???7~~~~!7JY5GBB#&#B5YJJJJY5YPPGB###B####&&&&&&&&&&&&&&&&&##BG####BBBBBGPGGGGGBGGB#B#GJPGBP
          <br></br>
          ~~^~~~!7??7~~^~!7?J5PGB###BP5YJJJJYYY55GGBB#####&&#&&&&&&&&&&&&&&&&####B#&&##BBBBGGGGGPPGPGB#GGYYGBB
          <br></br>
          ~!!!!!!!!!!~~~!7JY5PB####BPYYJJ?????JJYY5PPGBB#####&&&&&&&&&&&&&&&&#####B&&&&##BBBBBGBGGGGPGB5JGBBGB
          <br></br>
          ~!!!7!77777777?Y5PBB####BPYYJ????7????JJYY5PGGB##&&&&&&&&&&&&&&&&####BBBBB#&&&###BBBBBBBBBGGGGGGBGG#
          <br></br>
          ?7????????JYY5PGBBGGGGBBP5YYJJJJJJJ??JJJJJJJJJY555PPGGBBB###&&####BBBBGGGGGG#&###BBBBBBBBBBBBGGGGGPG
          <br></br>
          ??JJJJJJY55PPPPPP5PPGGBBP5YJJJ???7777!!!777777???JJJYYY55PPGBBBBBBBBBBBGGGGGB#&####BBBBBBBBBBBBGGGGG
          <br></br>
          ??JJYY5555555555PPGB##BPJJ?7777777777????J??JJJYYY555P5PPPPPPPPPPGGGGGGGGGGGB#&&###BBBGGGGBBGGGGGGGP
          <br></br>
          ?JJYY5555555PPPGGBB#&#BY?777!7777777!7!!~~~!!!77?????JJYYYY555P555555P5PPPPPGB#&##BBBBBBGGGGGGGGGGGG
          <br></br>
          J!JYJY55555PPPGGBB#&##P7!~~~^^^^^^^::::::^^^~~~~~~~~~~~!!!!77????JJJYYYYYJJJJYG####BBBBBBGGGGPGGGGGG
          <br></br>
          ??:?YYY5555PPGGBB####B57!~~~!!!!777!77777777777!7777777777777!!!!!!!!!7!!!~~~!JG##BBBBBBBGGGGPPPPPGG
          <br></br>
          JJ!.7Y55PPPGGBBB#####GYJ??JYYYY55555555555555555555555555YYYJJJJJJJJJJJJYY5Y?7?5GBBBBGGGGGGGGGPPPPP5
          <br></br>
          G??!.?5PPGGGBB#######GPPPGPPPPPPPPGGGGGGGGGGGGGGGGGGGGGGPPP5PPPGGGBB#BBBBGGGP5YY5PBBBGGGGGGPPPP5PP55
          <br></br>
          PY7J!^5PPGBBB#######BGB#BGGPPPPPPPPPPPPPPPPPPPPPPPPPPP55555PPGGGGBBBBB####BGGP555PGBGGGGPPPPPPPPP5P5
        </p> */}
        <img
        src={textPic}
        className="picture"></img>
        <img
          src={profilePic}
          alt="Profile image"
          className="profile-image"
        ></img>
      </div>
    </div>
  )
}
export default Home
