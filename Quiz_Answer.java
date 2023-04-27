package model;

public class Quiz_Answer {
    private int id;
    private String content;
    private int question_id;

    public Quiz_Answer(int id, String content, int question_id) {
        this.id = id;
        this.content = content;
        this.question_id = question_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(int question_id) {
        this.question_id = question_id;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((content == null) ? 0 : content.hashCode());
        result = prime * result + question_id;
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
        Quiz_Answer other = (Quiz_Answer) obj;
        if (id != other.id)
            return false;
        if (content == null) {
            if (other.content != null)
                return false;
        } else if (!content.equals(other.content))
            return false;
        if (question_id != other.question_id)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Quiz_Answer [id=" + id + ", content=" + content + ", question_id=" + question_id + "]";
    }

}
