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
    @JoinColumn(name = "question_id", nullable = false)
    private Quiz_Question question_id;

    public Quiz_Option() {

    }

    public Quiz_Option(Long id, String content, Quiz_Question question_id) {
        this.id = id;
        this.content = content;
        this.question_id = question_id;
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

    public Quiz_Question getQuiz_Question() {
        return question_id;
    }

    public void setQuiz_Question(Quiz_Question question_id) {
        this.question_id = question_id;
    }

    public Quiz_Question getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(Quiz_Question question_id) {
        this.question_id = question_id;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((content == null) ? 0 : content.hashCode());
        result = prime * result + ((question_id == null) ? 0 : question_id.hashCode());
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
        if (question_id == null) {
            if (other.question_id != null)
                return false;
        } else if (!question_id.equals(other.question_id))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Quiz_Option [id=" + id + ", content=" + content + ", question_id=" + question_id + "]";
    }

}
