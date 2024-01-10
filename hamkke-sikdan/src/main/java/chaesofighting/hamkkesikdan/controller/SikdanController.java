package chaesofighting.hamkkesikdan.controller;

import chaesofighting.hamkkesikdan.domain.Sikdan;
import chaesofighting.hamkkesikdan.repository.SikdanResult;
import chaesofighting.hamkkesikdan.service.SikdanService;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    private UserForm form = new UserForm();

    //메인 페이지
    @RequestMapping("/")
    public String main() {
        return "main";  //main.html을 찾아감.
    }

    //사용자 입력 페이지
    @GetMapping("/users") //리소스 -> 조회
    public String createForm(Model model) {
        model.addAttribute("userForm", new UserForm());
        return "usersCalorie";
    }

    //사용자 입력 페이지
    @PostMapping("/users") //리소스 서버에 저장
    public String create(UserForm form) { //결과 반환을 딱히 안해도 되는건가
        this.form.setCalorie(form.getCalorie());
        this.form.setSyndrome(form.getSyndrome());
        this.form.setRand(form.getRand());
        return "redirect:/usersCalorie";
    }

    //식단 추천 페이지
    @GetMapping("/sikdans")
    public String sikdan(Model model) {
        //SikdanResult sikdanResult = sikdanService.showSikdan(form.getCalorie(), form.getSyndrome(), form.getRand());
        //model.addAttribute("sikdanResult", sikdanResult);
        return "sikdan";
    }
}
