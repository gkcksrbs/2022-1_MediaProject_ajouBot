const Chat = (function () {
  const myName = "MediaStudent";

  // init 함수
  function init() {
    appendMessageTag("left", "아주봇", "안녕하세요!");
    // enter 키 이벤트
    $(document).on("keydown", "div.input-div textarea", function (e) {
      if (e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault();
        const message = $(this).val();

        // 메시지 전송
        sendMessage(message);
        // 입력창 clear
        appendMessageTag("right", myName, message);
        clearTextarea();
      }
    });
  }

  // 메세지 태그 생성
  function createMessageTag(LR_className, senderName, message) {
    // 형식 가져오기
    let chatLi = $("div.chat.format ul li").clone();

    // 값 채우기
    chatLi.addClass(LR_className);
    chatLi.find(".sender span").text(senderName);
    chatLi.find(".message span").text(message);

    return chatLi;
  }

  // 메세지 태그 append
  function appendMessageTag(LR_className, senderName, message) {
    const chatLi = createMessageTag(LR_className, senderName, message);

    $("div.chat:not(.format) ul").append(chatLi);

    // 스크롤바 아래 고정
    $("div.chat").scrollTop($("div.chat").prop("scrollHeight"));
  }

  // 메세지 전송
  function sendMessage(message) {
    // 서버에 전송하는 코드로 후에 대체
    fetch("http://localhost/bot", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            msg: message
        })
    })
    .then((res) => res.json())
    .then((datas) => {

      resive(datas.msg)
    }
    )
    // 통신하는 기능이 없으므로 여기서 receive
    // 통신하는 기능이 없으므로 여기서 receive
    // resive(data);
  }

  // 메세지 입력박스 내용 지우기
  function clearTextarea() {
    $("div.input-div textarea").val("");
  }

  // 메세지 수신
  function resive(data) {
    // const LR = data.senderName != myName ? "left" : "right";
    appendMessageTag("left", "아주봇", data);
  }

  return {
    init: init,
  };
})();

$(function () {
  Chat.init();
});
