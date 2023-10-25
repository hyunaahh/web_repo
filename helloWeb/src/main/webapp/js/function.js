//함수 선언방식 1

    //함수정의구문 - js는 java랑 다르게 매개변수 타입 따로 없고 변수이름만 넣어주면 됨.
        //parameter : function 안에서사용하는 변수. ex.std, score
            function myFunc(std, score=60){

                // if(score == undefined){
                //     score = 0;
                // }
                console.log(`${std}의 점수는 ${score}`);
                //return score; // return구문이 없으면 undefined값 반환.
                return score; 
        }
        myFunc('홍길동', 80); //함수는 호출해줘야 실행됨! 80은 매개값.
        myFunc('홍길동'); //값이 없으니까 undefined로 나옴. 그래서 if문으로 or 매개변수안에 아예 초기값을 잡아줌. 후자가 더 나은.. 
        console.log(myFunc('홍길동'));

//함수선언방식2
        var myFunc = function myFunc(std, score=60){
            // if(score == undefined){
            //     score = 0;
            // }
            console.log(`${std}의 점수는 ${score}`);
            //return score; // return구문이 없으면 undefined값 반환.
            return score; 
        }
        console.log(myFunc('홍길동'));
        //let myFunc = myFunc('홍길동');