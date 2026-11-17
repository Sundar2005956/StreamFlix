package com.example.streamflix.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.streamflix.model.WatchHistory;
import com.example.streamflix.service.WatchHistoryService;
@RestController
@RequestMapping("/api/watchhistory")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://sundar2005956.github.io"
})
public class WatchHistoryController {
    @Autowired
private WatchHistoryService watchHistoryService;

    @PostMapping("/add")
    public WatchHistory addWatchHistory(@RequestBody WatchHistory history) {
        return watchHistoryService.addWatchHistory(history);
    }

    @GetMapping("/get")
    public List<WatchHistory> getAllWatchHistory() {
        return watchHistoryService.getAllWatchHistory();
    }

    @DeleteMapping("/get/{id}")
    public String deleteWatchHistory(@PathVariable Long id) {
        watchHistoryService.deleteWatchHistory(id);
        return "Watch history deleted successfully";
    }
}
