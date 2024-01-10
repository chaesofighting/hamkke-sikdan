package chaesofighting.hamkkesikdan;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
public class SikdanController {
    //입력값 키, 몸무게, 성별, 질환 , 운동정도(추가됨), 나이
    //(기초대사량 * 활동계수)
    //=> 입력값은 총칼로리량 질환정보 랜덤변수
    private final SikdanService sikdanService;

    @GetMapping("/example") //리소스 -> 조회
    public String getSikdanForm(){
        return "output";
    }
    @PostMapping("/example") //리소스 서버에 저장
    public void getSikdan( //결과 반환을 딱히 안해도 되는건가
            @RequestParam int calorie,
            @RequestParam int syndrome,
            @RequestParam int rand

    ){
        sikdanService.showSikdan(calorie, syndrome, rand);
    }
}
