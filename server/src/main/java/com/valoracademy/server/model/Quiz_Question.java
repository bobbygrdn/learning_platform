package com.valoracademy.server.model;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "questions")
public class Quiz_Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private List<Quiz_Option> options;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private List<Quiz_Answer> answers;

    public Quiz_Question() {

    }

    public Quiz_Question(Long id, String content, List<Quiz_Option> options, Quiz_Answer answer) {
        this.id = id;
        this.content = content;
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

    public List<Quiz_Option> getOptions() {
        return options;
    }

    public void setOptions(List<Quiz_Option> options) {
        this.options = options;
    }

    public List<Quiz_Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Quiz_Answer> answers) {
        this.answers = answers;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((content == null) ? 0 : content.hashCode());
        result = prime * result + ((options == null) ? 0 : options.hashCode());
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
        if (options == null) {
            if (other.options != null)
                return false;
        } else if (!options.equals(other.options))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Quiz_Question [id=" + id + ", content=" + content + ", options=" + options + "]";
    }

}
