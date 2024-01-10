package chaesofighting.hamkkesikdan;

import chaesofighting.hamkkesikdan.repository.SikdanRepository;
import chaesofighting.hamkkesikdan.repository.SikdanResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class SikdanService {
    private final SikdanRepository sikdanRepository;

    @Autowired
    public SikdanService(SikdanRepository sikdanRepository){
        this.sikdanRepository = sikdanRepository;
    }

    //조회를 하도록 하는 함수
    public SikdanResult showSikdan(int calorie, int syndrome, int rand){
        return sikdanRepository.findByCalorieSyndromeRand(calorie, syndrome, rand);
    }
}
