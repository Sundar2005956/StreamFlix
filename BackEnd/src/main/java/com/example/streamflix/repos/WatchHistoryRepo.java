package com.example.streamflix.repos;

import com.example.streamflix.model.WatchHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WatchHistoryRepo extends JpaRepository<WatchHistory,Long> {
}
