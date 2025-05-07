var contador=0;
g1=0;
function goalkeeper()
{

    b=document.getElementById('b2');
    g=Math.floor(Math.random()*7)
    g1=g;
    if(g==1)
        b.style.animation="gl0 1s"
    else if(g==1)
        b.style.animation="gl1 1s"
    else if(g==1)
        b.style.animation="gl2 1s"
    else if(g==1)
        b.style.animation="gc1 1s"
    else if(g==1)
        b.style.animation="gr0 1s"
    else if(g==1)
        b.style.animation="gr1 1s"
    else if(g==1)
        b.style.animation="gr2 1s"
}
function goal()
{
    document.getElementById('GoalDone11').innerHTML="GOLAÇO!!!!";
    document.getElementById('GoalDone12').innerHTML="GOLAÇO!!!!";
    o=Math.floor(Math.random()*5);
    if(o==1)
        document.getElementById('b1').style.animation="Outside1 1s"
    else if(o==2)
        document.getElementById('b1').style.animation="Outside2 1s"
    else if(o==3)
        document.getElementById('b1').style.animation="Outside3 1s"
    else if(o==4)
        document.getElementById('b1').style.animation="Outside4 1s"
    else if(o==5)
        document.getElementById('b1').style.animation="Outside5 1s"
} 
function LeftTop()
{
    document.getElementById('b1').style.animation="left0 1s";
    goalkeeper();
    if(g1!=1)
    {
        contador++;
        document.getElementById('Score').innerHTML="contador";
        document.getElementById('GoalDone1').innerHTML="GOL!!";
        document.getElementById('GoalDone2').innerHTML="Goal!!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="DEFEEESA!!";
        document.getElementById('GoalDone2').innerHTML="DEFEEESA!!";    
    }

}
function RightTop()
{
    document.getElementById('b1').style.animation="right0 1s";
    goalkeeper();
    if(g1!=5)
    {
        contador++;
        document.getElementById('Score').innerHTML="contador";
        document.getElementById('GoalDone1').innerHTML="GOL!!";
        document.getElementById('GoalDone2').innerHTML="Goal!!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="DEFEEESA!!";
        document.getElementById('GoalDone2').innerHTML="DEFEEESA!!";    
    }
}
function CenterTop()
{
    document.getElementById('b1').style.animation="center0 1s";
    goalkeeper();
    if(g1!=4)
    {
        contador++;
        document.getElementById('Score').innerHTML="contador";
        document.getElementById('GoalDone1').innerHTML="GOL!!";
        document.getElementById('GoalDone2').innerHTML="Goal!!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="DEFEEESA!!";
        document.getElementById('GoalDone2').innerHTML="DEFEEESA!!";    
    }
}
function LeftMiddle()
{
    document.getElementById('b1').style.animation="left2 1s";
    goalkeeper();
    if(g1!=6)
    {
        contador++;
        document.getElementById('Score').innerHTML="contador";
        document.getElementById('GoalDone1').innerHTML="GOL!!";
        document.getElementById('GoalDone2').innerHTML="Goal!!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="DEFEEESA!!";
        document.getElementById('GoalDone2').innerHTML="DEFEEESA!!";    
    }
}
function RightMiddle()
{
    document.getElementById('b1').style.animation="right2 1s";
    goalkeeper();
    if(g1!=6)
    {
        contador++;
        document.getElementById('Score').innerHTML="contador";
        document.getElementById('GoalDone1').innerHTML="Goal!!";
        document.getElementById('GoalDone2').innerHTML="Goal!!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="DEFEEESA!!";
        document.getElementById('GoalDone2').innerHTML="DEFEEESA!!";    
    }
}
function CenterMiddle()
{
    document.getElementById('b1').style.animation="center1 1s";
    goalkeeper();
    if(g1!=4)
    {
        contador++;
        document.getElementById('Score').innerHTML="contador";
        document.getElementById('GoalDone1').innerHTML="GOL!!";
        document.getElementById('GoalDone2').innerHTML="Goal!!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="DEFEEESA!!";
        document.getElementById('GoalDone2').innerHTML="DEFEEESA!!";    
    }
}
function LeftBottom()
{
    document.getElementById('b1').style.animation="left1 1s";
    goalkeeper();
    if(g1!=3)
    {
        contador++;
        document.getElementById('Score').innerHTML="contador";
        document.getElementById('GoalDone1').innerHTML="GOL!!";
        document.getElementById('GoalDone2').innerHTML="Goal!!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="DEFEEESA!!";
        document.getElementById('GoalDone2').innerHTML="DEFEEESA!!";    
    }
}
function RightBottom()
{
    document.getElementById('b1').style.animation="right2 1s";
    goalkeeper();
    if(g1!=7)
    {
        contador++;
        document.getElementById('Score').innerHTML="contador";
        document.getElementById('GoalDone1').innerHTML="GOL!!";
        document.getElementById('GoalDone2').innerHTML="Goal!!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="DEFEEESA!!";
        document.getElementById('GoalDone2').innerHTML="DEFEEESA!!";    
    }
}
function CenterBottom()
{
    document.getElementById('b1').style.animation="center1 1s";
    goalkeeper();
    if(g1!=4)
    {
        contador++;
        document.getElementById('Score').innerHTML="contador";
        document.getElementById('GoalDone1').innerHTML="GOL!!";
        document.getElementById('GoalDone2').innerHTML="Goal!!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="DEFEEESA!!";
        document.getElementById('GoalDone2').innerHTML="DEFEEESA!!";    
    }
}