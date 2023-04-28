package com.valoracademy.server.model;

import jakarta.persistence.*;

@Entity
@Table(name = "quiz_options")
public class Quiz_Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "quiz_id", nullable = false)
    private Quiz quiz;

    public Quiz_Option() {

    }

    public Quiz_Option(Long id, String content, Quiz quiz) {
        this.id = id;
        this.content = content;
        this.quiz = quiz;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((content == null) ? 0 : content.hashCode());
        result = prime * result + ((quiz == null) ? 0 : quiz.hashCode());
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
        Quiz_Option other = (Quiz_Option) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (content == null) {
            if (other.content != null)
                return false;
        } else if (!content.equals(other.content))
            return false;
        if (quiz == null) {
            if (other.quiz != null)
                return false;
        } else if (!quiz.equals(other.quiz))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Quiz_Option [id=" + id + ", content=" + content + ", quiz=" + quiz + "]";
    }

}
