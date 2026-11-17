package com.example.streamflix.service;

import com.example.streamflix.model.WatchHistory;
import com.example.streamflix.repos.WatchHistoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WatchHistoryService {

    @Autowired
    private WatchHistoryRepo watchHistoryRepository;

    public WatchHistory addWatchHistory(WatchHistory history) {
        return watchHistoryRepository.save(history);
    }

    public List<WatchHistory> getAllWatchHistory() {
        return watchHistoryRepository.findAll();
    }

    public void deleteWatchHistory(Long id) {
        watchHistoryRepository.deleteById(id);
    }
}