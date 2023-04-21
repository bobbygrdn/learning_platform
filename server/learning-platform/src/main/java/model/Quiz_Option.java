package model;

public class Quiz_Option {
    private int id;
    private String content;
    private int questionId;

    public Quiz_Option(int id, String content, int questionId) {
        this.id = id;
        this.content = content;
        this.questionId = questionId;
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

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((content == null) ? 0 : content.hashCode());
        result = prime * result + questionId;
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
        if (id != other.id)
            return false;
        if (content == null) {
            if (other.content != null)
                return false;
        } else if (!content.equals(other.content))
            return false;
        if (questionId != other.questionId)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Quiz_Option [id=" + id + ", content=" + content + ", questionId=" + questionId + "]";
    }

}
