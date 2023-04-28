package com.valoracademy.server.model;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "quiz_questions")
public class Quiz_Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "quiz_id", nullable = false)
    private Quiz quiz;

    @OneToMany(mappedBy = "question")
    private List<Quiz_Option> options;

    @OneToOne(mappedBy = "question")
    private Quiz_Answer answer;

    public Quiz_Question() {

    }

    public Quiz_Question(Long id, String content, Quiz quiz, List<Quiz_Option> options, Quiz_Answer answer) {
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

    public List<Quiz_Option> getOptions() {
        return options;
    }

    public void setOptions(List<Quiz_Option> options) {
        this.options = options;
    }

    public Quiz_Answer getAnswer() {
        return answer;
    }

    public void setAnswer(Quiz_Answer answer) {
        this.answer = answer;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((content == null) ? 0 : content.hashCode());
        result = prime * result + ((quiz == null) ? 0 : quiz.hashCode());
        result = prime * result + ((options == null) ? 0 : options.hashCode());
        result = prime * result + ((answer == null) ? 0 : answer.hashCode());
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
        Quiz_Question other = (Quiz_Question) obj;
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
        if (options == null) {
            if (other.options != null)
                return false;
        } else if (!options.equals(other.options))
            return false;
        if (answer == null) {
            if (other.answer != null)
                return false;
        } else if (!answer.equals(other.answer))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Quiz_Question [id=" + id + ", content=" + content + ", quiz=" + quiz + ", options=" + options
                + ", answer=" + answer + "]";
    }

}
