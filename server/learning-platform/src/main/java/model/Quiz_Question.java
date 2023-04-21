package model;

import java.util.ArrayList;

public class Quiz_Question {
    private int id;
    private String question;
    private ArrayList<Quiz_Option> options;
    private int quizId;

    public Quiz_Question(int id, String question, ArrayList<Quiz_Option> options, int quizId) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.quizId = quizId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public ArrayList<Quiz_Option> getOptions() {
        return options;
    }

    public void setOptions(ArrayList<Quiz_Option> options) {
        this.options = options;
    }

    public int getQuizId() {
        return quizId;
    }

    public void setQuizId(int quizId) {
        this.quizId = quizId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((question == null) ? 0 : question.hashCode());
        result = prime * result + ((options == null) ? 0 : options.hashCode());
        result = prime * result + quizId;
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
        if (id != other.id)
            return false;
        if (question == null) {
            if (other.question != null)
                return false;
        } else if (!question.equals(other.question))
            return false;
        if (options == null) {
            if (other.options != null)
                return false;
        } else if (!options.equals(other.options))
            return false;
        if (quizId != other.quizId)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Quiz_Question [id=" + id + ", question=" + question + ", options=" + options + ", quizId=" + quizId
                + "]";
    }

}
