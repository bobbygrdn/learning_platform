package com.valoracademy.server.model;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "quizzes")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "lesson_id", nullable = false)
    private Long lessonId;

    @OneToMany(mappedBy = "quiz_id", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Quiz_Question> questions;

    public Quiz() {

    }

    public Quiz(Long id, String title, String description, Long lessonId, List<Quiz_Question> questions,
            List<Quiz_Option> options, List<Quiz_Answer> answers) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.lessonId = lessonId;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getLessonId() {
        return lessonId;
    }

    public void setLessonId(Long lessonId) {
        this.lessonId = lessonId;
    }

    public List<Quiz_Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Quiz_Question> questions) {
        this.questions = questions;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        result = prime * result + ((description == null) ? 0 : description.hashCode());
        result = prime * result + ((lessonId == null) ? 0 : lessonId.hashCode());
        result = prime * result + ((questions == null) ? 0 : questions.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Quiz other = (Quiz) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        if (description == null) {
            if (other.description != null)
                return false;
        } else if (!description.equals(other.description))
            return false;
        if (lessonId == null) {
            if (other.lessonId != null)
                return false;
        } else if (!lessonId.equals(other.lessonId))
            return false;
        if (questions == null) {
            if (other.questions != null)
                return false;
        } else if (!questions.equals(other.questions))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Quiz [id=" + id + ", title=" + title + ", description=" + description + ", lessonId=" + lessonId
                + ", questions=" + questions + "]";
    }

}
