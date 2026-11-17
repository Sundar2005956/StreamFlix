package com.example.streamflix.contoller;

import com.example.streamflix.model.WatchHistory;
import com.example.streamflix.service.WatchHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/watchhistory")
@CrossOrigin(origins = "http://localhost:5173")
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
