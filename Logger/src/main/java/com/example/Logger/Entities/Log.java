package com.example.Logger.Entities;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;


@Entity
public class Log implements Serializable{
	@Id @GeneratedValue@Nonnull
	private Long id;
	@Column(name="date")@Nonnull
	private LocalDate date;
	@Column(name="lesson")@Nonnull
	private String lesson;
	@Column(name="mistake")@Nonnull
	private String mistake;
	
	public Long getId() {
		return id;
	}
	@Override
	public String toString() {
		return "Log [id=" + id + ", date=" + date + ", lesson=" + lesson + ", mistake=" + mistake + "]";
	}
	public void setId(Long id) {
		this.id = id;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getLesson() {
		return lesson;
	}
	public void setLesson(String lesson) {
		this.lesson = lesson;
	}
	public String getMistake() {
		return mistake;
	}
	public void setMistake(String mistake) {
		this.mistake = mistake;
	}
	public Log(Long id, LocalDate date, String lesson, String mistake) {
		this.id =id;
		this.date = date;
		this.lesson = lesson;
		this.mistake = mistake;
	}
	public Log() {
		super();
	}
}
