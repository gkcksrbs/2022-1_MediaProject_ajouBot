const express = require("express");
const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/test", (req, res) => {
  let _url = req.url;
  res.sendFile(__dirname + "/test.html");
});

app.post("/bot", (req, res) => {
  console.log(req.body);
  let message = req.body.msg;

  if (message.includes("종강") && message.includes("언제")) {
    res.send({
      msg: "자신의 기말시험이 끝나면 바로 종강입니다. 즐거운 방학되세요!",
    });
  } else if (
    (message.includes("월B목B") ||
      message.includes("월D목D") ||
      message.includes("월F목F") ||
      message.includes("화A금A") ||
      message.includes("화C금C") ||
      message.includes("화E금E") ||
      message.includes("월A수A") ||
      message.includes("월C수C") ||
      message.includes("월E수E") ||
      message.includes("화B목A") ||
      message.includes("화D목C") ||
      message.includes("화F목E") ||
      message.includes("수B금B") ||
      message.includes("수D금D") ||
      message.includes("수F금F")) &&
    message.includes("시험 시간")
  ) {
    if (message.includes("월B목B"))
      res.send({
        msg: "월B목B 시험 시간은 '월요일 10 : 30 ~ 12 : 15' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("월D목D"))
      res.send({
        msg: "월D목D 시험 시간은 '월요일 13 : 30 ~ 15 : 15' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("월F목F"))
      res.send({
        msg: "월F목F 시험 시간은 '월요일 16 : 30 ~ 18 : 15' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("화A금A"))
      res.send({
        msg: "화A금A 시험 시간은 '화요일 09 : 00 ~ 10 : 45' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("화C금C"))
      res.send({
        msg: "화C금C 시험 시간은 '화요일 12 : 00 ~ 13 : 45' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("화E금E"))
      res.send({
        msg: "화E금E 시험 시간은 '화요일 15 : 00 ~ 16 : 45' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("월A수A"))
      res.send({
        msg: "월A수A 시험 시간은 '수요일 09 : 00 ~ 10 : 45' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("월C수C"))
      res.send({
        msg: "월C수C 시험 시간은 '수요일 12 : 00 ~ 13 : 45' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("월E수E"))
      res.send({
        msg: "월E수E 시험 시간은 '수요일 15 : 00 ~ 16 : 45' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("화B목A"))
      res.send({
        msg: "화B목A 시험 시간은 '목요일 09 : 00 ~ 10 : 45' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("화D목C"))
      res.send({
        msg: "화D목C 시험 시간은 '목요일 12 : 00 ~ 13 : 45' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("화F목E"))
      res.send({
        msg: "화F목E 시험 시간은 '목요일 15 : 00 ~ 16 : 45' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("수B금B"))
      res.send({
        msg: "수B금B 시험 시간은 '금요일 10 : 30 ~ 12 : 15' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("수D금D"))
      res.send({
        msg: "수D금D 시험 시간은 '금요일 13 : 30 ~ 15 : 15' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else if (message.includes("수F금F"))
      res.send({
        msg: "수F금F 시험 시간은 '금요일 16 : 30 ~ 18 : 15' 입니다. 시험 강의실은 교수님한테 물어보세요!",
      });
    else res.send({ msg: "저도 몰라요!" });
  } else if (message.includes("학식") || message.includes("식당")) {
    res.send({
      msg: "학식은 [구학생회관], [팔달관], [다산관], [선인재], [기숙사식당], [교직원식당]이 있습니다. 각 이름을 입력해주시면 위치를 알려드려요.",
    });
  } else if (message.includes("구학생회관")) {
    res.send({
      msg: `구학생회관의 위치는 "http://naver.me/xOClgMN4" 에서 확인 하실 수 있습니다.`,
    });
  } else if (message.includes("팔달관")) {
    res.send({
      msg: "팔달관의 위치는 http://naver.me/FaZE7dBo 에서 확인하실 수 있습니다.",
    });
  } else if (message.includes("다산관")) {
    res.send({
      msg: "다산관의 위치는 http://naver.me/GrSL6wRd 에서 확인하실 수 있습니다.",
    });
  } else if (message.includes("선인재")) {
    res.send({
      msg: "선인재의 위치는 http://naver.me/FFvrjKVB 이고, 지하 1층 입니다.",
    });
  } else if (message.includes("기숙사식당")) {
    res.send({
      msg: "기숙사식당의 위치는 http://naver.me/IIqibTA5 1층입니다.",
    });
  } else if (message.includes("교직원식당")) {
    res.send({
      msg: "교직원식당의 위치는 http://naver.me/IIqibTA5 에서 확인하실 수 있습니다.",
    });
  } else if (message.includes("셔틀버스") || message.includes("셔틀")) {
    res.send({
      msg: "셔틀버스에 관한 정보는 https://www.ajou.ac.kr/kr/life/bus01.do 에서 확인할 수 있어요!",
    });
  } else if (message.includes("인턴") || message.includes("링크")) {
    res.send({
      msg: "링크 인턴에 관한 정보는 https://how.ajou.ac.kr/ 에서 확인할 수 있어요!",
    });
  } else {
    res.send({
      msg: "제가 이해하지 못했어요!",
    });
  }
});

http.listen(80, () => {
  console.log(`listening on *:80`);
});