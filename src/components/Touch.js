// 공통 헤더 작성
import React, { useEffect, useRef, useState } from 'react';

function Touch() {
    // 클릭을 여러번하면 터져버리는 캐릭터
    const [touch, setTouch] = useState(0); // 기본값 0 세팅

    // 1~3 번 클릭시 점점 빨개짐 ( css 변동 )
    // 4~9 번 클릭시 점점 커짐 ( css 변동 )
    // 터지는 순간 insert 해서 몇번째로 캐릭터를 터뜨렸는지 알려주는 값 return 받기
    // 당신은 몇번째 이 캐릭터를 죽인 사람입니다! 라는 알람문구를 넣으면 재밌겠다
    // 그리고 다시 초기화

    // 배경화면이 3총 동안 빨개졌다가 다시 돌아옴
    // 저장할값은 상대의 ip 주소를 저장함
    // 중복된 ip 주소라면 그만 클릭하세여 하고 캐릭터가 없어져버림

    // 그리고 알림 문구가 뜸 "이게 뭔가요?" 라는 버튼을 클릭하면 설명 toggle 이 나옴

    // 시간이 남으면... 하겠음....ㅜ
    return (
        <section>
            <div>three.js 로 캐릭터를 만드는게 우선사항인가...</div>
        </section>
    );
}

export default Touch;
