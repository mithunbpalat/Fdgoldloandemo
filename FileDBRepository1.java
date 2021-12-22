package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.FileDB1;

@Repository
public interface FileDBRepository1 extends JpaRepository<FileDB1, String> {

}
