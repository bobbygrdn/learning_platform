package com.robertgordon.valoracademy.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "topics", nullable = false)
    private String topics;

    @Column(name = "difficulty", nullable = false)
    private String difficulty;

    @Column(name = "time_needed", nullable = false)
    private String timeToComplete;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "course_id")
    private List<Lesson> lessons = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

    public Course() {

    }

    public Course(long id, String title, String description, String topics, String difficulty, String timeToComplete) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.topics = topics;
        this.difficulty = difficulty;
        this.timeToComplete = timeToComplete;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public List<Lesson> getLessons() {
        return lessons;
    }

    public void setLessons(List<Lesson> lessons) {
        this.lessons = lessons;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTopics() {
        return topics;
    }

    public void setTopics(String topics) {
        this.topics = topics;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getTimeToComplete() {
        return timeToComplete;
    }

    public void setTimeToComplete(String timeToComplete) {
        this.timeToComplete = timeToComplete;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + (int) (id ^ (id >>> 32));
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        result = prime * result + ((description == null) ? 0 : description.hashCode());
        result = prime * result + ((topics == null) ? 0 : topics.hashCode());
        result = prime * result + ((difficulty == null) ? 0 : difficulty.hashCode());
        result = prime * result + ((timeToComplete == null) ? 0 : timeToComplete.hashCode());
        result = prime * result + ((lessons == null) ? 0 : lessons.hashCode());
        result = prime * result + ((user == null) ? 0 : user.hashCode());
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
        Course other = (Course) obj;
        if (id != other.id)
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
        if (topics == null) {
            if (other.topics != null)
                return false;
        } else if (!topics.equals(other.topics))
            return false;
        if (difficulty == null) {
            if (other.difficulty != null)
                return false;
        } else if (!difficulty.equals(other.difficulty))
            return false;
        if (timeToComplete == null) {
            if (other.timeToComplete != null)
                return false;
        } else if (!timeToComplete.equals(other.timeToComplete))
            return false;
        if (lessons == null) {
            if (other.lessons != null)
                return false;
        } else if (!lessons.equals(other.lessons))
            return false;
        if (user == null) {
            if (other.user != null)
                return false;
        } else if (!user.equals(other.user))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Course [id=" + id + ", title=" + title + ", description=" + description + ", topics=" + topics
                + ", difficulty=" + difficulty + ", timeToComplete=" + timeToComplete + ", lessons=" + lessons
                + ", user=" + user + "]";
    }

}
